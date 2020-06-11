/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts as getPostsAction } from 'src/actions';
import MainLayout from 'src/components/layout/MainLayout/MainLayout';

const Dashboard = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <MainLayout>
      Dashboard test
      {posts.map(({ note }) => (
        <span>{note}</span>
      ))}
    </MainLayout>
  );
};

Dashboard.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPostsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
