import { put, takeLatest } from 'redux-saga/effects';
import { GET_POSTS, setPosts, setUsers } from 'src/actions';
import postsData from 'src/data/posts.json';
import userData from 'src/data/users.json';

function* getPosts() {
  yield put(setPosts({ posts: postsData }));
  yield put(setUsers({ users: userData }));
}

function* saga() {
  yield takeLatest(GET_POSTS, getPosts);
}

export default saga;
