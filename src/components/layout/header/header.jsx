import React from "react";
import "./style.css";

import Nav from "/src/components/layout/nav/nav";
import Logo from "/src/components/ui/logo/logo";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
}
