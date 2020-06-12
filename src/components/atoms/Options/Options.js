/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Options.scss';

library.add(faEllipsisV);

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));

CustomToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

CustomToggle.defaultProps = {
  onClick: () => {},
};

const Options = ({ options }) => {
  return (
    <div className="options">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <FontAwesomeIcon icon={faEllipsisV} size="xs" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map(({ label }) => (
            <Dropdown.Item key={`option-${label}`}>{label}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

Options.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
};

export default Options;
