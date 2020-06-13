/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Kudos.scss';

const Kudos = ({ type, userId, form, kudoses, users }) => {
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

  return (
    <div className="kudos">
      <div className="kudos__image">
        <img src={kudos.image} alt="kudos" />
      </div>
      <div className="kudos__content">
        <span className="kudos__label">{kudos.label}</span>
        <span className="kudos__user">{getUserLabel()}</span>
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
};

Kudos.defaultProps = {
  userId: null,
  form: false,
  kudoses: [],
  users: [],
};

const mapStateToProps = (state) => {
  const { kudoses, users } = state;
  return { kudoses, users };
};

export default connect(mapStateToProps)(Kudos);
