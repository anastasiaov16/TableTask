import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const onClickInput = e => {
    e.stopPropagation();
    props.onClick();
  };

  return (
    <button 
        {...props} 
        type={props.type || 'submit'}
        onClick={onClickInput}
    >
      {props.children}
    </button>
  );
};

// PropTypes = {
//     onClick:PropTypes.func
// }
export default Button;
