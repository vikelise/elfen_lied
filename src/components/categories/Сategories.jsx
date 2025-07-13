"use client";

import Mirror from "../../../public/photos/mirror.svg";
import FloorLamp from "../../../public/photos/floor_lamp.svg";
import Chairs from "../../../public/photos/chairs.svg";
import Cabinets from "../../../public/photos/cabinets.svg";
import { CategoriesCard } from "@/components/categoriesCard/CategoriesCard.jsx";
import { useEffect } from "react";

export default function Categories() {
  const cards = [
    {
      image: <Mirror />,
      title: (
        <>
          напольные <br />
          зеркала
        </>
      ),
      count: "4",
    },
    {
      image: <FloorLamp />,
      title: (
        <>
          торшеры <br /> и лампы
        </>
      ),
      count: "4",
    },
    {
      image: <Chairs />,
      title: (
        <>
          кресла <br /> и стулья
        </>
      ),
      count: "4",
    },
    {
      image: <Cabinets />,
      title: (
        <>
          столы <br /> и тумбы
        </>
      ),
      count: "4",
    },
  ];

  const DEFAULT_SPEED = 2; // Количество пикселей для смещения

  useEffect(() => {
    //находим первый элемент с классом slider
    const slider = document.querySelector(".slider");
    if (!slider) return;

    //находим первый элемент с классом slider-track, т.е. контейнер для слайда
    const wrapper = document.querySelector(".slider-track");
    //innerHTML то получить или изменить содержимое
    //получаем html код контейнера и добавляем его в конец, тем самым дублируем
    wrapper.innerHTML += wrapper.innerHTML;
    //Дублирование нужно, чтобы создать иллюзию бесконечной прокрутки. Когда первая копия слайдов заканчивается, мы можем "перезапустить" анимацию с нулевой позиции, не останавливаясь.

    let position = 0; //отслеживание текущей позиции по оси х, 0 - исходная позиция

    function animate() {
      position -= DEFAULT_SPEED; // уменьшаем позицию для перемещения влево

      //проверка на то достигла ли анимация середины дублированного содержимого
      if (Math.abs(position) >= wrapper.scrollWidth / 2) {
        position = 0; //если на середине содержимого сбрасываем позицию
      }

      //само перемещение элементов по х
      wrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []); // Запускаем эффект только один раз после монтирования компонента

  return (
    <div className="mt-[60px]">
      <h2 className="mx-[15px] uppercase font-main text-white text-[23px] font-medium mb-[20px]">
        категории
      </h2>
      <div className="slider overflow-x-hidden h-[350px]">
        <div className="slider-track flex items-center">
          {cards.map((card, index) => (
            <div key={index} className="slide mr-[60px] flex-shrink-0">
              <CategoriesCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
