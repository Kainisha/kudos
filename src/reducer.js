import { SET_POSTS, SET_USERS, SET_GROUPS } from 'src/actions';

const initState = {
  posts: [],
  users: [],
  groups: [],
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
    case SET_GROUPS: {
      const { groups } = payload;
      return {
        ...state,
        groups,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
