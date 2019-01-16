import React from 'react';
import PropTypes from 'prop-types';

const button = ({ clicked, value}) => <button onClick={clicked}>{value}</button>;

button.propTypes = {
  clicked: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default button;
