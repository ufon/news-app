import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => <span>{value}</span>;

Counter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Counter;
