import React from "react";
import About from "../../blocks/about/about";
import Benefits from "../../blocks/benefits/benefits";

export default function MainPage({ benefitsList }) {
  return (
    <div>
      <About />
      <Benefits benefitsList={benefitsList} />
    </div>
  );
}
