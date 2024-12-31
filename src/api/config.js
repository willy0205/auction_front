export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  POSTS: {
    FEED: '/feed/list',
    CREATE: '/feed/register',
    GET: (id) => `/feed/${id}`,
    LIKE: (id) => `/feed/${id}/like`,
    COMMENT: (id) => `/feed/${id}/comments`,
  },
  AUCTION: {
    CREATE: '/auction/register',
  },
  PROFILE: {
    GET: '/profile/me',
    GET_BY_USERNAME: (username) => `/profile/${username}`,
    UPDATE: '/profile/update',
  },
};

export const fetchAPI = async (endpoint, options = {}) => {
  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not defined in environment variables');
  }

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