
import React from "react";
import "./Input.css";

import PropTypes from  "prop-types"


const Input = ({type,value,handle}) => {

  return <input data-testid="inputTag" 
  value={value} 
  type={type} 
  onChange={(e)=>handle(e)} />;
};

export default Input;


Input.propTypes = {
  value: PropTypes.string,
  variant: PropTypes.string.isRequired,
 
  type: PropTypes.string,
  size: PropTypes.string,
}