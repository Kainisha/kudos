import { SET_POSTS, SET_USERS } from 'src/actions';

const initState = {
  posts: [],
  users: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_POSTS: {
      const { posts } = payload;
      return {
        ...state,
        posts,
      };
    }
    case SET_USERS: {
      const { users } = payload;
      return {
        ...state,
        users,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
