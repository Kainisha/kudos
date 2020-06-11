import { SET_POSTS } from 'src/actions';

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
    default: {
      return state;
    }
  }
};

export default reducer;
