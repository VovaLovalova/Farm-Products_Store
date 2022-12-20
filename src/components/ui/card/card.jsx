import React from "react";
import "./style.css";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Disclaimer from "/src/components/ui/disclaimer/disclaimer";

export default function Card(props) {
  return (
    <div
      className={`card-wrapper${
        props.farmProduct ? ` card-wrapper--green` : " card-wrapper--red"
      }`}
    >
      <div className="card-row">
        <img src={props.image} alt={props.title} className="card__img" />
        <div className="card-column">
          <Disclaimer>Фермерские продукты</Disclaimer>
          <Title size={TitleSize.SMALL}>{props.title}</Title>
        </div>
      </div>
      <p className="card__text">{props.text}</p>
    </div>
  );
}
