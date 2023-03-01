import React from "react";
import "./Input.css";
const Inputdata = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        name={props.name}
        onBlur={props.onBlur}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        checked={props.checked}
      />
    </React.Fragment>
  );
};

export default Inputdata;
