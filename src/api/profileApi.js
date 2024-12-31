import { API_ENDPOINTS, fetchAPI } from './config';
import { mockProfile } from '../mocks/profileData';

// API 호출 시뮬레이션을 위한 지연 함수
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const profileApi = {
  // 프로필 정보 조회
  getProfile: async (username) => {
    try {
      await delay(300); // API 호출 시뮬레이션
      
      // 실제 API 호출 대신 mock 데이터 반환
      return {
        data: mockProfile
      };

      // 실제 API 구현 시 사용할 코드
      /*
      const endpoint = username 
        ? API_ENDPOINTS.PROFILE.GET_BY_USERNAME(username)
        : API_ENDPOINTS.PROFILE.GET;
      
      const response = await fetchAPI(endpoint);
      return response.data;
      */
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw error;
    }
  },

  // 프로필 업데이트
  updateProfile: async (profileData) => {
    try {
      await delay(300); // API 호출 시뮬레이션
      
      // 실제 API 구현 시 사용할 코드
      /*
      const response = await fetchAPI(API_ENDPOINTS.PROFILE.UPDATE, {
        method: 'PUT',
        body: JSON.stringify(profileData),
      });
      return response.data;
      */

      return {
        data: {
          ...mockProfile,
          ...profileData
        }
      };
    } catch (error) {
      console.error('Failed to update profile:', error);
      throw error;
    }
  },
}; 