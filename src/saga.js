import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_POSTS, setPosts } from 'src/actions';
import postsData from 'src/data/posts.json';

const fetchPosts = async () => {
  return postsData;
};

function* getPosts() {
  const posts = yield call(fetchPosts);
  yield put(setPosts({ posts }));
}

function* saga() {
  yield takeLatest(GET_POSTS, getPosts);
}

export default saga;
