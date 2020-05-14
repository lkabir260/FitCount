import React from 'react';

const NewDay = (props) => (
  <button
    className='btn btn-default'
    onClick={props.HandleDayClick}
  >
    Restart Count
  </button>
);

export default NewDay;
