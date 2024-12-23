import { API_ENDPOINTS, fetchAPI } from './config';

export const feedApi = {
  getPersonalFeed: () => 
    fetchAPI(API_ENDPOINTS.FEED.PERSONAL),

  getAllFeed: () => 
    fetchAPI(API_ENDPOINTS.FEED.ALL),
}; 