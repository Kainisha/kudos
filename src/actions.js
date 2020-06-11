export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = ({ posts }) => ({
  type: SET_POSTS,
  payload: { posts },
});
