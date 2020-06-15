import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faDesktop, faMale } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './GroupIcon.scss';

library.add(faCity, faDesktop, faMale);

const TYPE_MARKETING = 1;
const TYPE_DEVELOPERS = 2;
const TYPE_CLIENTS = 3;

const GroupIcon = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      default:
      case TYPE_MARKETING: {
        return faCity;
      }
      case TYPE_DEVELOPERS: {
        return faDesktop;
      }
      case TYPE_CLIENTS: {
        return faMale;
      }
    }
  };

  return (
    <div className="group-icon">
      <FontAwesomeIcon icon={getIcon()} size="xs" />
    </div>
  );
};

GroupIcon.propTypes = {
  type: PropTypes.number,
};

GroupIcon.defaultProps = {
  type: TYPE_MARKETING,
};

export default GroupIcon;
