/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'src/components/atoms/UserAvatar/UserAvatar';
import { connect } from 'react-redux';
import moment from 'moment';
import './PostAuthor.scss';

const PostAuthor = ({ authorId, createdOn, users }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const postAuthor = users.find((user) => user.id === authorId);
    if (typeof postAuthor === 'undefined') {
      return;
    }
    setAuthor(postAuthor);
  }, []);

  const getAvatar = () => {
    return author.avatar;
  };

  const getFullName = () => {
    const { first_name: firstName, last_name: lastName } = author;
    return `${firstName} ${lastName}`;
  };

  const getInterval = () => {
    const now = moment();
    const createdDate = moment(createdOn);
    const diffDays = now.diff(createdDate, 'days');
    return diffDays === 1 ? `${diffDays} dzień temu` : `${diffDays} dni temu`;
  };

  return (
    <div className="post__author">
      <UserAvatar src={getAvatar()} alt="Avatar" />
      <div className="post__author__block">
        <div className="post__author__name">{getFullName()}</div>
        <div className="post__author__date">{getInterval()}</div>
      </div>
    </div>
  );
};

PostAuthor.propTypes = {
  authorId: PropTypes.number.isRequired,
  createdOn: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(PostAuthor);