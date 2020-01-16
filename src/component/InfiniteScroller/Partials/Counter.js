import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({count}) => (
  <h2 className="counter">
    <div>total items: {count}</div>
    <small>scroll down to add more</small>
  </h2>
)
Counter.propTypes = {
  count: PropTypes.number
}

export default Counter;