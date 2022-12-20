import React from "react";
import "./style.css";

import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/copyright/copyright";

export default function Footer() {
  return (
    <div className="footer">
      <Logo />
      <Copyright />
    </div>
  );
}
