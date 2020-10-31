import React from "react";
import "./custom-button.scss"

function CustomButton({ children, ...ohterProps }) {
  return (
    <button className="custom-button" {...ohterProps}>
      {children}
    </button>
  );
}

export default CustomButton;
