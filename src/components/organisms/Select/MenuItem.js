import React from 'react';
import PropTypes from 'prop-types';
import GroupIcon from 'src/components/atoms/GroupIcon/GroupIcon';

const MenuItem = ({ label, value, onClick }) => {
  const handleClick = () => onClick(value);

  return (
    <li onClick={handleClick}>
      <GroupIcon type={value} />
      {label}
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
