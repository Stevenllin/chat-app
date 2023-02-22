import React from 'react';

const FieldErrorMsg: React.FC = (props) => {
  return (
    <span className="color-danger">{props.children}</span>
  )
}

export default FieldErrorMsg;
