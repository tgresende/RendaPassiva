import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

const TextInput = ({
  marginBottom = 24,
  placeholder = '',
  maxWidth = 200,
}) => (
  <Input
    marginBottom={marginBottom}
    placeholder={placeholder}
    maxWidth={maxWidth}
  />
);

TextInput.propTypes = {
  marginBottom: PropTypes.number,
  placeholder: PropTypes.number,
  maxWidth: PropTypes.number,
};

TextInput.defaultProps = {
  marginBottom: 24,
  placeholder: '',
  maxWidth: 200,
};

export default TextInput;
