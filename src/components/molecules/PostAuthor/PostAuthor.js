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

    switch (diffDays) {
      case 0:
        return 'dzisiaj';
      case 1:
        return `${diffDays} dzień temu`;
      default:
        return `${diffDays} dni temu`;
    }
  };

  return (
    <div className="author">
      <UserAvatar src={getAvatar()} alt="Avatar" />
      <div className="author-block">
        <div className="author-name">{getFullName()}</div>
        <div className="author-date">{getInterval()}</div>
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
