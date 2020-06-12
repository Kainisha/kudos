import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import PostAuthor from 'src/components/molecules/PostAuthor/PostAuthor';

const Post = ({ note, author_id: authorId, created_on: createdOn }) => {
  return (
    <div className="post">
      <PostAuthor authorId={authorId} createdOn={createdOn} />
      <div className="post__note">{note}</div>
    </div>
  );
};

Post.propTypes = {
  note: PropTypes.string.isRequired,
  author_id: PropTypes.number.isRequired,
  created_on: PropTypes.string.isRequired,
};

export default Post;
