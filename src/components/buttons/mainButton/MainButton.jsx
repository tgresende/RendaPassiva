import React from 'react';
import PropTypes from 'prop-types';

import Button from './styles';

const MainButton = ({
  text = 'default text',
}) => (
  <div>
    <Button>
      {text}
    </Button>
  </div>
);

MainButton.propTypes = {
  text: PropTypes.number.isRequired,
};

export default MainButton;
