import { SET_POSTS, SET_USERS, SET_GROUPS, SET_KUDOSES, ADD_POST } from 'src/actions';

const initState = {
  posts: [],
  users: [],
  groups: [],
  kudos: [],
};

const MIN_ID = 1;
const MAX_ID = 100000;

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
      const { note, selectedKudos, selectedGroup, selectedUserId, createdOn } = payload;
      const randomId = Math.floor(Math.random() * (MAX_ID - MIN_ID)) + MIN_ID;

      console.log(selectedGroup);

      const test = {
        id: randomId,
        note,
        author_id: 1,
        created_on: createdOn,
        kudos_assigned: [
          {
            type: selectedKudos,
            user_id: selectedUserId,
          },
        ],
        group_id: selectedGroup,
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
