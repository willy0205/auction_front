export const API_BASE_URL = 'YOUR_API_ENDPOINT';

export const API_ENDPOINTS = {
  POSTS: {
    FEED: '/posts/feed',
    CREATE: '/posts',
    GET: (id) => `/posts/${id}`,
    LIKE: (id) => `/posts/${id}/like`,
    COMMENT: (id) => `/posts/${id}/comments`,
  },
  PROFILE: {
    GET: '/profile',
    UPDATE: '/profile/update',
  },
};

export const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}; 