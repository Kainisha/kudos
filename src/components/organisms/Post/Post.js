import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import PostAuthor from 'src/components/molecules/PostAuthor/PostAuthor';
import Statistics from 'src/components/molecules/Statistics/Statistics';
import CommentInput from 'src/components/molecules/CommentInput/CommentInput';

const Post = ({ note, author_id: authorId, created_on: createdOn, likes, group_id: groupId }) => {
  return (
    <div className="post">
      <PostAuthor authorId={authorId} createdOn={createdOn} />
      <div className="post__note">{note}</div>
      <Statistics likes={likes} groupId={groupId} />
      <CommentInput />
    </div>
  );
};

Post.propTypes = {
  note: PropTypes.string.isRequired,
  author_id: PropTypes.number.isRequired,
  created_on: PropTypes.string.isRequired,
  likes: PropTypes.number,
  group_id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  likes: 0,
};

export default Post;
