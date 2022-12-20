import React from "react";
import "./style.css";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import Card from "/src/components/ui/card/card";

export default function Benefits({ benefitsList }) {
  return (
    <section className="benefits-wrapper">
      {benefitsList?.length ? (
        <>
          <Title className="benefits__title">
            Почему фермерские продукты лучше?
          </Title>{" "}
          <ul className="benefits__list">
            {benefitsList.map((item) => (
              <li className="benefits__item" key={item.id}>
                <Card {...item} />
              </li>
            ))}
          </ul>
          <Button text="Купить" />
        </>
      ) : null}
    </section>
  );
}
