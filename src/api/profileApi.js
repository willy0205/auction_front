import { API_ENDPOINTS, fetchAPI } from './config';
import { mockPosts } from '../mocks/feedData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const profileApi = {
  getProfile: () => 
    fetchAPI(API_ENDPOINTS.PROFILE.GET),

  updateProfile: (profileData) =>
    fetchAPI(API_ENDPOINTS.PROFILE.UPDATE, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    }),

  getUserPosts: async (username) => {
    await delay(300);
    // 해당 사용자의 게시물만 필터링
    const userPosts = mockPosts.filter(post => post.author.username === username);
    
    return userPosts.map(post => {
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