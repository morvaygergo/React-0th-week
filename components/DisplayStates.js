import React from 'react';
import PropTypes from 'prop-types';

const DisplayStates = ({children}) => children;

DisplayStates.propTypes = {
  children: PropTypes.element.isRequired
}

export default DisplayStates;
