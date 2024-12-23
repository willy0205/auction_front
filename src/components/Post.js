import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CommentIcon, LikeIcon, BookmarkIcon, ShareIcon } from './icons';
import { Avatar } from '../styles/common.styles';
import {
  PostContainer,
  PostHeader,
  PostHeaderLeft,
  PostImage,
  PostActions,
  ActionButtons,
  ActionButton,
  TimeStamp,
} from '../styles/post.styles';

function Post({ post }) {
  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: ko,
  });

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderLeft>
          <Avatar src={post.author.avatar} alt={post.author.username} />
          <span>{post.author.username}</span>
        </PostHeaderLeft>
      </PostHeader>
      <PostImage src={post.images[0]} alt="" />
      <PostActions>
        <ActionButtons>
          <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
            <ActionButton>
              <LikeIcon size={24} color={post.isLiked ? "#ed4956" : "#262626"} />
            </ActionButton>
            <ActionButton>
              <CommentIcon size={24} color="#262626" />
            </ActionButton>
            <ActionButton>
              <ShareIcon size={24} color="#262626" />
            </ActionButton>
          </div>
          <ActionButton>
            <BookmarkIcon size={24} color="#262626" />
          </ActionButton>
        </ActionButtons>
      </PostActions>
      <TimeStamp>{formattedDate}</TimeStamp>
    </PostContainer>
  );
}

export default Post; 