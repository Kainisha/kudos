export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const SET_USERS = 'SET_USERS';
export const SET_GROUPS = 'SET_GROUPS';
export const SET_KUDOSES = 'SET_KUDOSES';
export const ADD_POST = 'ADD_POST';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = ({ posts }) => ({
  type: SET_POSTS,
  payload: { posts },
});

export const setUsers = ({ users }) => ({
  type: SET_USERS,
  payload: { users },
});

export const setGroups = ({ groups }) => ({
  type: SET_GROUPS,
  payload: { groups },
});

export const setKudoses = ({ kudoses }) => ({
  type: SET_KUDOSES,
  payload: { kudoses },
});

export const addPost = ({ note, selectedKudos, selectedGroup, selectedUserId, createdOn }) => ({
  type: ADD_POST,
  payload: { note, selectedKudos, selectedGroup, selectedUserId, createdOn },
});
