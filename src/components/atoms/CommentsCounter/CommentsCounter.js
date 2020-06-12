import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './CommentsCounter.scss';

library.add(faCommentAlt);

const CommentsCounter = ({ counter }) => (
  <div className="commnets__counter">
    <FontAwesomeIcon icon={faCommentAlt} size="xs" />
    <span>{counter}</span>
  </div>
);

CommentsCounter.propTypes = {
  counter: PropTypes.number,
};

CommentsCounter.defaultProps = {
  counter: 0,
};

export default CommentsCounter;
