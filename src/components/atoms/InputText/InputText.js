import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

const InputText = ({ onChange, placeholder, initValue }) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (event) => {
    const { value: intpuValue } = event.target;
    setValue(intpuValue);
    onChange(intpuValue);
  };

  return <input type="text" value={value} placeholder={placeholder} onChange={handleChange} />;
};

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.func,
  initValue: PropTypes.string,
};

InputText.defaultProps = {
  placeholder: '',
  initValue: '',
};

export default InputText;
