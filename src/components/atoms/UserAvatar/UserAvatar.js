import React from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.scss';

const UserAvatar = ({ src, alt }) => (
  <div className="user-avatar">
    <img src={src} alt={alt} />
  </div>
);

UserAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

UserAvatar.defaultProps = {
  src: '',
};

export default UserAvatar;
