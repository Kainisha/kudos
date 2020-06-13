/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import PostAuthor from 'src/components/molecules/PostAuthor/PostAuthor';
import Statistics from 'src/components/molecules/Statistics/Statistics';
import CommentInput from 'src/components/molecules/CommentInput/CommentInput';
import Kudos from 'src/components/molecules/Kudos/Kudos';

const Post = ({
  note,
  author_id: authorId,
  created_on: createdOn,
  likes,
  group_id: groupId,
  kudos_assigned: kudosAssigned,
}) => {
  return (
    <div className="post">
      <PostAuthor authorId={authorId} createdOn={createdOn} />
      <div className="post__note">{note}</div>
      <div className="post__kudoses">
        {kudosAssigned.map(({ type, user_id: userId, id }) => (
          <Kudos userId={userId} type={type} key={`post-kudos-${id}`} />
        ))}
      </div>
      <Statistics likes={likes} groupId={groupId} />
      <div className="post__footer">
        <CommentInput />
      </div>
    </div>
  );
};

Post.propTypes = {
  note: PropTypes.string.isRequired,
  author_id: PropTypes.number.isRequired,
  created_on: PropTypes.string.isRequired,
  likes: PropTypes.number,
  group_id: PropTypes.number.isRequired,
  kudos_assigned: PropTypes.array.isRequired,
};

Post.defaultProps = {
  likes: 0,
};

export default Post;
