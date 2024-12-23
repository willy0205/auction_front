import { API_ENDPOINTS, fetchAPI } from './config';

export const tweetApi = {
  createTweet: (content) => 
    fetchAPI(API_ENDPOINTS.TWEETS.CREATE, {
      method: 'POST',
      body: JSON.stringify({ content }),
    }),

  getUserTweets: () => 
    fetchAPI(API_ENDPOINTS.TWEETS.USER),

  deleteTweet: (tweetId) =>
    fetchAPI(API_ENDPOINTS.TWEETS.DELETE(tweetId), {
      method: 'DELETE',
    }),

  likeTweet: (tweetId) =>
    fetchAPI(API_ENDPOINTS.TWEETS.LIKE(tweetId), {
      method: 'POST',
    }),

  retweetTweet: (tweetId) =>
    fetchAPI(API_ENDPOINTS.TWEETS.RETWEET(tweetId), {
      method: 'POST',
    }),
}; 