/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import './Kudos.scss';

const Kudos = ({ type, userId, form, kudoses, users, isSelected, onClick }) => {
  const [kudos, setKudos] = useState({});

  useEffect(() => {
    const currentKudos = kudoses.find((item) => item.type === type) || {};
    setKudos(currentKudos);
  }, []);

  const getFullName = () => {
    const assignedUser = users.find((user) => user.id === userId) || {};
    const { first_name: firstName, last_name: lastName } = assignedUser;
    return `${firstName} ${lastName}`;
  };
  const getUserLabel = () => (form ? 'Imię nazwisko' : getFullName());
  const kudosClasses = cx('kudos', { 'kudos-form': form, 'kudos-selected': isSelected });

  const handleClick = () => {
    if (!form) {
      return;
    }

    onClick(type);
  };

  return (
    <div className={kudosClasses} onClick={handleClick}>
      <div className="kudos-image">
        <img src={kudos.image} alt="kudos" />
      </div>
      <div className="kudos-content">
        <span className="kudos-label">{kudos.label}</span>
        <span className="kudos-user">{getUserLabel()}</span>
      </div>
    </div>
  );
};

Kudos.propTypes = {
  type: PropTypes.number.isRequired,
  userId: PropTypes.number,
  form: PropTypes.bool,
  kudoses: PropTypes.array,
  users: PropTypes.array,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

Kudos.defaultProps = {
  userId: null,
  form: false,
  kudoses: [],
  users: [],
  isSelected: false,
  onClick: () => {},
};

const mapStateToProps = (state) => {
  const { kudoses, users } = state;
  return { kudoses, users };
};

export default connect(mapStateToProps)(Kudos);
