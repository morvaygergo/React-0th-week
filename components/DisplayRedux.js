import React from 'react';
import PropTypes from 'prop-types';

const DisplayRedux = ({value}) => <h1>{value} 🌰</h1>;

DisplayRedux.propTypes = {
  value: PropTypes.number.isRequired
}

export default DisplayRedux;
