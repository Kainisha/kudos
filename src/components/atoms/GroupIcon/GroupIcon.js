import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faDesktop, faMale } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './GroupIcon.scss';

library.add(faCity, faDesktop, faMale);

const GroupIcon = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      default:
      case 1: {
        return faCity;
      }
      case 2: {
        return faDesktop;
      }
      case 3: {
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
  type: 0,
};

export default GroupIcon;
