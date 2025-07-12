"use client";
import Lamp from "../../../public/photos/lamp.svg";
import Armchair from "../../../public/photos/armchair.svg";
import Table from "../../../public/photos/table.svg";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { ProductDayCard } from "../productDayCard/ProductDayCard";

export default function ProductDaySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: <Lamp />,
      backgroundText: "Benjamin Moore",
      title: "Santa Trinita",
      description:
        "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
      price: "150 000",
      number: "1",
    },
    {
      image: <Armchair />,
      backgroundText: "Paint Here Glory",
      title: "кресло",
      description:
        "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
      price: "120 000",
      number: "2",
    },
    {
      image: <Table />,
      backgroundText: "Benjamin Moore",
      title: "высокий стол",
      description:
        "Функциональный дизайнерский стол для создания максимально комфортного освещения",
      price: "235 000",
      number: "3",
    },
  ];

  // Анимация для плавного появления и исчезновения карточек
  const slideAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    reset: true, //запускаем анимация при каждом рендере компонента
  });

  // Обработка свайпа
  const handlers = useSwipeable({
    onSwipedDown: () => handleSwipe("down"),
    onSwipedUp: () => handleSwipe("up"),
  });

  // Логика переключения индекса карточки
  const handleSwipe = (direction) => {
    if (direction === "down" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "up" && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div {...handlers} className=" flex justify-center items-center mx-[15px]">
      <animated.div style={slideAnimation}>
        <ProductDayCard {...cards[currentIndex]} />
      </animated.div>
    </div>
  );
}
