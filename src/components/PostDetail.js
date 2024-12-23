import { useState, useRef, useCallback, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CommentIcon, LikeIcon, ShareIcon } from './icons';
import { Avatar } from '../styles/common.styles';
import {
  Overlay,
  Modal,
  CloseButton,
  ImageSection,
  PostImage,
  SlideButton,
  ImageCounter,
  ContentSection,
  PostHeader,
  Username,
  PostContent,
  PostActions,
  ActionButtons,
  ActionButton,
  Likes,
  PostTime,
  CommentForm,
  CommentInput,
  PostButton,
  CommentsSection,
  Comment as CommentStyle,
  CommentContainer,
  CommentContent,
  CommentText,
  CommentActions,
  CommentTime,
  LikeCount,
  ViewReplies,
  RepliesContainer,
  Reply,
  ReplyActions,
  ReplyForm,
  ReplyInput,
  LoadingSpinner,
  ReplyActionButton,
} from '../styles/postDetail.styles';
import { postApi } from '../api/postApi';

function CommentItem({ comment, onReply, onLike }) {
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const formattedDate = formatDistanceToNow(new Date(comment.createdAt), {
    addSuffix: true,
    locale: ko,
  });

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <CommentContainer>
      <CommentContent>
        <CommentStyle>
          <strong>{comment.username}</strong>
          <CommentText>{comment.text}</CommentText>
        </CommentStyle>
        <CommentActions>
          <CommentTime>{formattedDate}</CommentTime>
          <LikeCount>{comment.likes}개의 좋아요</LikeCount>
          <ReplyActionButton 
            onClick={() => onLike(comment.id)}
            className={comment.isLiked ? 'liked' : ''}
          >
            {comment.isLiked ? '좋아요 취소' : '좋아요'}
          </ReplyActionButton>
          <ReplyActionButton onClick={() => setIsReplying(!isReplying)}>
            답글 달기
          </ReplyActionButton>
        </CommentActions>
        
        {comment.replies?.length > 0 && (
          <>
            <ViewReplies onClick={() => setShowReplies(!showReplies)}>
              {showReplies ? '답글 숨기기' : `답글 ${comment.replies.length}개 보기`}
            </ViewReplies>
            {showReplies && (
              <RepliesContainer>
                {comment.replies.map(reply => (
                  <Reply key={reply.id}>
                    <CommentStyle>
                      <strong>{reply.username}</strong>
                      <CommentText>{reply.text}</CommentText>
                    </CommentStyle>
                    <ReplyActions>
                      <CommentTime>
                        {formatDistanceToNow(new Date(reply.createdAt), {
                          addSuffix: true,
                          locale: ko,
                        })}
                      </CommentTime>
                      <LikeCount>{reply.likes}개의 좋아요</LikeCount>
                      <ReplyActionButton 
                        onClick={() => onLike(comment.id, reply.id)}
                        className={reply.isLiked ? 'liked' : ''}
                      >
                        {reply.isLiked ? '좋아요 취소' : '좋아요'}
                      </ReplyActionButton>
                    </ReplyActions>
                  </Reply>
                ))}
              </RepliesContainer>
            )}
          </>
        )}

        {isReplying && (
          <ReplyForm onSubmit={handleSubmitReply}>
            <ReplyInput
              type="text"
              placeholder="답글 달기..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <PostButton 
              type="submit" 
              disabled={!replyText.trim()}
            >
              게시
            </PostButton>
          </ReplyForm>
        )}
      </CommentContent>
    </CommentContainer>
  );
}

function PostDetail({ post: initialPost, onClose }) {
  const [post, setPost] = useState(initialPost);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [newComment, setNewComment] = useState('');
  const commentsRef = useRef(null);

  // 게시글 상세 정보 로드
  useEffect(() => {
    const loadPostDetail = async () => {
      try {
        const postDetail = await postApi.getPostDetail(initialPost.id);
        setPost(postDetail);
      } catch (error) {
        console.error('Failed to load post detail:', error);
      }
    };
    loadPostDetail();
  }, [initialPost.id]);

  // 댓글 로드
  const loadComments = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const result = await postApi.getPostComments(post.id, page);
      if (page === 1) {
        setComments(result.comments);
      } else {
        setComments(prev => [...prev, ...result.comments]);
      }
      setHasMore(result.hasMore);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      setIsLoading(false);
    }
  }, [post.id, page, isLoading, hasMore]);

  // 댓글 아이콘 클릭 핸들러 추가
  const handleCommentIconClick = () => {
    setPage(1);
    setComments([]);
    setHasMore(true);
    loadComments();
  };

  // 초기 댓글 로드
  useEffect(() => {
    loadComments();
  }, []);

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (!commentsRef.current || isLoading) return;

    const { scrollTop, scrollHeight, clientHeight } = commentsRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      loadComments();
    }
  }, [loadComments, isLoading]);

  // 답글 로드
  const loadReplies = async (commentId) => {
    try {
      const result = await postApi.getCommentReplies(post.id, commentId);
      // 댓글 목록 업데이트
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { ...comment, replies: result.replies }
            : comment
        )
      );
    } catch (error) {
      console.error('Failed to load replies:', error);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLike = (commentId, replyId = null) => {
    // TODO: 좋아요 API 호출
    console.log('좋아요:', commentId, replyId);
  };

  useEffect(() => {
    const commentSection = commentsRef.current;
    if (commentSection) {
      commentSection.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (commentSection) {
        commentSection.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => Math.min(post.images.length - 1, prev + 1));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // TODO: 댓글 추가 API 호출
      console.log('새 댓글:', newComment);
      setNewComment('');
    }
  };

  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: ko,
  });

  const handleReply = (commentId, replyText) => {
    // TODO: 답글 추가 API 호출
    console.log('답글:', commentId, replyText);
  };

  return (
    <Overlay onClick={onClose}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Modal onClick={e => e.stopPropagation()}>
        <ImageSection>
          <PostImage src={post.images[currentImageIndex]} alt="" />
          {post.images?.length > 1 && (
            <>
              <SlideButton
                direction="prev"
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
              >
                ‹
              </SlideButton>
              <SlideButton
                direction="next"
                onClick={handleNextImage}
                disabled={currentImageIndex === post.images.length - 1}
              >
                ›
              </SlideButton>
              <ImageCounter>
                {currentImageIndex + 1} / {post.images.length}
              </ImageCounter>
            </>
          )}
        </ImageSection>
        <ContentSection>
          <PostHeader>
            <Avatar src={post.author.avatar} alt={post.author.username} />
            <Username>{post.author.username}</Username>
          </PostHeader>

          <CommentsSection ref={commentsRef}>
            <PostContent>
              <CommentStyle>
                <strong>{post.author.username}</strong>
                {post.caption}
              </CommentStyle>
            </PostContent>

            {comments.map((comment) => (
              <CommentItem 
                key={comment.id} 
                comment={comment}
                onReply={handleReply}
                onLike={handleLike}
              />
            ))}
            {isLoading && <LoadingSpinner />}
            <PostTime>{formattedDate}</PostTime>
          </CommentsSection>

          <PostActions>
            <ActionButtons>
              <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
                <ActionButton>
                  <LikeIcon 
                    size={24} 
                    color={post.isLiked ? "#ed4956" : "#262626"} 
                  />
                </ActionButton>
                <ActionButton onClick={handleCommentIconClick}>
                  <CommentIcon size={24} color="#262626" />
                </ActionButton>
                <ActionButton>
                  <ShareIcon size={24} color="#262626" />
                </ActionButton>
              </div>
            </ActionButtons>
            <Likes>{post.likes.toLocaleString()}개의 좋아요</Likes>
          </PostActions>

          <CommentForm onSubmit={handleSubmitComment}>
            <CommentInput
              type="text"
              placeholder="댓글 달기..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <PostButton 
              type="submit" 
              disabled={!newComment.trim()}
            >
              게시
            </PostButton>
          </CommentForm>
        </ContentSection>
      </Modal>
    </Overlay>
  );
}

export default PostDetail; 