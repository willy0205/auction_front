import { API_ENDPOINTS, fetchAPI, API_BASE_URL } from './config';

export const postApi = {
  // 피드 목록 조회
  getFeedPosts: async () => {
    try {
      console.log('Fetching from:', API_BASE_URL + API_ENDPOINTS.POSTS.FEED);
      const response = await fetchAPI(API_ENDPOINTS.POSTS.FEED);
      console.log('Server response:', response);
      
      // 서버 응답 데이터를 프론트엔드 형식으로 변환
      return response.data.map(post => ({
        id: post.id.toString(),
        images: post.imageList,  // 서버에서 받은 이미지 경로를 그대로 사용
        caption: post.contents,
        createdAt: post.registerTime,
        author: {
          id: 'user1',
          username: 'willy950205',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=willy950205'
        },
        likes: post.likeCount,
        isLiked: false,
        commentsCount: post.commentsCount
      }));
    } catch (error) {
      console.error('Failed to fetch feed posts:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      throw error;
    }
  },

  // 게시글 상세 정보 조회
  getPostDetail: async (postId) => {
    try {
      const response = await fetchAPI(API_ENDPOINTS.POSTS.GET(postId));
      return response.data;
    } catch (error) {
      console.error('Failed to fetch post detail:', error);
      throw error;
    }
  },

  // 나머지 메서드들도 실제 API 호출로 변경...
}; 