import React from 'react';
import PropTypes from 'prop-types';

const display = ({children}) => children;

display.propTypes = {
  children: PropTypes.element.isRequired
}

export default display;
