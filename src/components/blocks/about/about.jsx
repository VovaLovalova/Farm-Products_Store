import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import farmer from "/src/assets/farmer.svg";
import "./style.css";

export default function About() {
  return (
    <section className="about-wrapper">
      <Title size={TitleSize.BIG}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <p className="about__text">
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </p>
      <img src={farmer} alt="farmer" className="about__img" />
    </section>
  );
}
