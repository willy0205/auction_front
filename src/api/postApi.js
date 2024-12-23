import { mockPosts } from '../mocks/feedData';

// API 호출 시뮬레이션을 위한 지연 함수
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const postApi = {
  // 게시글 상세 정보 조회
  getPostDetail: async (postId) => {
    await delay(500); // API 호출 시뮬레이션
    const post = mockPosts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    // 총 댓글 수 계산 (대댓글 포함)
    const totalComments = post.comments.reduce((total, comment) => {
      // 댓글 1개 + 해당 댓글의 답글 수
      return total + 1 + (comment.replies?.length || 0);
    }, 0);

    return {
      id: post.id,
      images: post.images,
      caption: post.caption,
      createdAt: post.createdAt,
      author: post.author,
      likes: post.likes,
      isLiked: post.isLiked,
      commentsCount: totalComments, // 총 댓글 수 (대댓글 포함)
    };
  },

  // 게시글의 댓글 목록 조회 (페이지네이션)
  getPostComments: async (postId, page = 1, limit = 3) => {
    await delay(300);
    const post = mockPosts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    const start = (page - 1) * limit;
    const end = start + limit;
    const comments = post.comments.slice(start, end);
    
    // 총 댓글 수 계산 (대글 + 대댓글)
    const totalComments = post.comments.reduce((total, comment) => {
      // 각 댓글의 대댓글 수를 더함
      return total + 1 + (comment.replies?.length || 0);
    }, 0);
    
    return {
      comments: comments.map(comment => ({
        id: comment.id,
        username: comment.username,
        text: comment.text,
        createdAt: comment.createdAt,
        likes: comment.likes,
        isLiked: comment.isLiked,
        replies: comment.replies?.map(reply => ({
          id: reply.id,
          username: reply.username,
          text: reply.text,
          createdAt: reply.createdAt,
          likes: reply.likes,
          isLiked: reply.isLiked,
        })) || [],
        repliesCount: comment.replies?.length || 0 // 각 댓글의 대댓글 수
      })),
      hasMore: end < post.comments.length,
      total: totalComments // 총 댓글 수 (댓글 + 대댓글)
    };
  },

  // 댓글의 답글 목록 조회
  getCommentReplies: async (postId, commentId) => {
    await delay(200);
    const post = mockPosts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    const comment = post.comments.find(c => c.id === commentId);
    if (!comment) throw new Error('Comment not found');

    return {
      replies: comment.replies?.map(reply => ({
        id: reply.id,
        username: reply.username,
        text: reply.text,
        createdAt: reply.createdAt,
        likes: reply.likes,
        isLiked: reply.isLiked,
      })) || [],
      total: comment.replies?.length || 0 // 대댓글 개수만 반환
    };
  },

  // 댓글 좋아요/좋아요 취소
  toggleCommentLike: async (postId, commentId, replyId = null) => {
    await delay(200);
    const post = mockPosts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    if (replyId) {
      const comment = post.comments.find(c => c.id === commentId);
      if (!comment) throw new Error('Comment not found');
      
      const reply = comment.replies?.find(r => r.id === replyId);
      if (!reply) throw new Error('Reply not found');

      reply.isLiked = !reply.isLiked;
      reply.likes += reply.isLiked ? 1 : -1;
      
      return { isLiked: reply.isLiked, likes: reply.likes };
    } else {
      const comment = post.comments.find(c => c.id === commentId);
      if (!comment) throw new Error('Comment not found');

      comment.isLiked = !comment.isLiked;
      comment.likes += comment.isLiked ? 1 : -1;
      
      return { isLiked: comment.isLiked, likes: comment.likes };
    }
  },

  // 새 댓글 작성
  createComment: async (postId, text) => {
    await delay(300);
    const post = mockPosts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    const newComment = {
      id: `c${Date.now()}`,
      username: 'willy950205', // 현재 로그인한 사용자
      text,
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
      replies: []
    };

    post.comments.unshift(newComment);
    return newComment;
  },

  // 댓글에 답글 작성
  createReply: async (postId, commentId, text) => {
    await delay(300);
    const post = mockPosts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    const comment = post.comments.find(c => c.id === commentId);
    if (!comment) throw new Error('Comment not found');

    const newReply = {
      id: `r${Date.now()}`,
      username: 'willy950205', // 현재 로그인한 사용자
      text,
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
    };

    if (!comment.replies) {
      comment.replies = [];
    }
    comment.replies.push(newReply);
    return newReply;
  },

  // 피드 목록 조회
  getFeedPosts: async () => {
    await delay(300);
    return mockPosts.map(post => {
      // 총 댓글 수 계산 (대댓글 포함)
      const commentsCount = post.comments.reduce((total, comment) => {
        return total + 1 + (comment.replies?.length || 0);
      }, 0);

      return {
        id: post.id,
        images: post.images,
        caption: post.caption,
        createdAt: post.createdAt,
        author: post.author,
        likes: post.likes,
        isLiked: post.isLiked,
        commentsCount // 총 댓글 수 (대댓글 포함)
      };
    });
  },
}; 