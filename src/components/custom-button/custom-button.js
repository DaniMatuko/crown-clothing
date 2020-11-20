import React from "react";
import "./custom-button.scss";

function CustomButton({ children, isGoogleSignIn, ...ohterProps }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...ohterProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
