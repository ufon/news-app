import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-firebase';

const Counter = ({ value, setValue, uuid }) => <span>{value}</span>;

Counter.propTypes = {
  uuid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

const mapFirebaseToProps = (props, ref) => ({
  value: props.uuid,
  setValue: value => ref(`likes/${props.uuid}`).set(value),
});

export default connect(mapFirebaseToProps)(Counter);
