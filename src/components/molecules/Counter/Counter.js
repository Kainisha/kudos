import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import cx from 'classnames';
import './Counter.scss';

library.add(faHeart, faCommentAlt);

const Counter = ({ initCounter, likes, count }) => {
  const [counter, setCounter] = useState(initCounter);
  const handleClick = () => {
    if (!count) {
      return;
    }

    setCounter(counter + 1);
  };

  const getIcon = () => {
    if (likes) {
      return faHeart;
    }

    return faCommentAlt;
  };

  const getTooltipText = () => {
    if (likes) {
      return 'Kliknij by polubić';
    }

    return 'Komentarze';
  };

  const counterClasses = cx('counter', { 'counter-count': count });

  return (
    <OverlayTrigger placement="top" delay="300" overlay={<Tooltip>{getTooltipText()}</Tooltip>}>
      <div className={counterClasses} onClick={handleClick}>
        <FontAwesomeIcon icon={getIcon()} size="xs" />
        <span>{counter}</span>
      </div>
    </OverlayTrigger>
  );
};

Counter.propTypes = {
  initCounter: PropTypes.number,
  likes: PropTypes.bool,
  count: PropTypes.bool,
};

Counter.defaultProps = {
  initCounter: 0,
  likes: false,
  count: false,
};

export default Counter;
