import { SET_POSTS, SET_USERS, SET_GROUPS, SET_KUDOSES, ADD_POST } from 'src/actions';

const initState = {
  posts: [],
  users: [],
  groups: [],
  kudos: [],
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
    case SET_KUDOSES: {
      const { kudoses } = payload;
      return {
        ...state,
        kudoses,
      };
    }
    case ADD_POST: {
      const { posts: postsState } = state;

      const test = {
        id: 5,
        note: 'note 2',
        author_id: 1,
        created_on: '2020-01-01 15:10:10',
        kudos_assigned: [
          {
            type: 2,
            user_id: 1,
          },
        ],
        group_id: 2,
        likes: 2,
      };

      return {
        ...state,
        posts: [...postsState, test],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
