import React from "react";
import "./style.css";

export default function Disclaimer({ children }) {
  return (
    <div className="disclaimer-wrapper">
      <p className="disclaimer__text">{children}</p>
    </div>
  );
}
