import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const onChageInput = e => {
    props.onChange(e);
  };

  return (
    <input 
        {...props} 
        onChange={onChageInput}
    >
      {props.children}
    </input>
  );
};

// PropTypes = {
//     onChange:PropTypes.func
// }
export default Input;
