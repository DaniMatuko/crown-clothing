import React from "react";
import "./form-input.scss";

const FormInput = ({handleChange, label,  ...otherProps }) => {
  return (
    <div className="group">
      <label
        className={`form-input-label ${
          otherProps.value.length ? "shrink" : ""
        }`}
    >{label}</label>
      <input className="form-input" onChange={handleChange} {...otherProps}/>
    </div>
  );
};

export default FormInput;
