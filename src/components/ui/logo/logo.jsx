import React from "react";
import logo from "/src/assets/logo.svg";
import "./style.css";

export default function Logo() {
  return (
    <a href="#" className="logo__link">
      <img src={logo} alt="logo" className="logo__img" />
      <span>Фермерские продукты</span>
    </a>
  );
}
