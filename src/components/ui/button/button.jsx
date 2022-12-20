import React from "react";
import "./style.css";

export default function Button({ text }) {
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
}
