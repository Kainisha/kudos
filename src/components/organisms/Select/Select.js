import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import GroupIcon from 'src/components/atoms/GroupIcon/GroupIcon';
import MenuItem from './MenuItem';
import './Select.scss';

library.add(faChevronDown);

const Select = ({ options, onSelect, initValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState(initValue);

  const getValueLabel = () => {
    const selectedOption = options.find((option) => option.value === value) || {};
    return selectedOption.label;
  };

  const handleShowMenu = () => setShowMenu(!showMenu);
  const handleSelectOption = (optionValue) => {
    setValue(optionValue);
    onSelect(optionValue);
    setShowMenu(!showMenu);
  };

  const selectClasses = cx('select', { 'select-show': showMenu });

  return (
    <div className={selectClasses}>
      <div className="select__value" onClick={handleShowMenu}>
        <GroupIcon type={value} />
        {getValueLabel()}
        <FontAwesomeIcon icon={faChevronDown} size="xs" className="select__icon" />
      </div>
      {showMenu && (
        <ul className="select__menu">
          {options.map(({ value: optionValue, label }) => (
            <MenuItem
              value={optionValue}
              label={label}
              onClick={handleSelectOption}
              key={`option-${optionValue}`}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  initValue: PropTypes.number,
};

Select.defaultProps = {
  initValue: 1,
};

export default Select;
