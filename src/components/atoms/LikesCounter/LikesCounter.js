import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './LikesCounter.scss';

library.add(faHeart);

const LikesCounter = ({ initCounter }) => {
  const [counter, setCounter] = useState(initCounter);
  const handleClick = () => setCounter(counter + 1);

  return (
    <div className="likes__counter">
      <FontAwesomeIcon icon="heart" size="xs" onClick={handleClick} />
      <span>{counter}</span>
    </div>
  );
};

LikesCounter.propTypes = {
  initCounter: PropTypes.number,
};

LikesCounter.defaultProps = {
  initCounter: 0,
};

export default LikesCounter;
