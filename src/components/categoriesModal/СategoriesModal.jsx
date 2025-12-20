"use client";
import Exit from "../../../public/icons/exitIcon.svg";
import React from "react";

// Объект с данными
const data = {
  lamp: {
    title: "торшеры и лампы",
    items: [
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "Aubrey",
        image: "../../../public/photos/aubreyLamp.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "Darrell",
        image: "../../../public/photos/darrellLamp.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "coppelia",
        image: "../../../public/photos/coppeliaLamp.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "artemide",
        image: "../../../public/photos/artemideLamp.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "Leslie",
        image: "../../../public/photos/leslieLamp.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
    ],
  },
  chair: {
    title: "кресла и стулья",
    description: "Комфортные стулья для вашего дома",
    image: "/images/chair.jpg",
  },
  mirror: {
    title: "напольные зеркала",
    items: [
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "Kristin",
        image: "../../../public/photos/kristinMirror.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "Arlene",
        image: "../../../public/photos/arleneMirror.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "Colleen",
        image: "../../../public/photos/colleenMirror.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "coppelia",
        image: "../../../public/photos/coppeliaMirror.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
      {
        color: "../../../public/icons/exit-icon.svg",
        colorName: "artemide",
        image: "../../../public/photos/artemideMirror.svg",
        title: "Лампа настольная",
        price: "150 000",
      },
    ],
  },
  table: {
    title: "Столы и тумбы",
    description: "Прочные столы для работы и отдыха",
    image: "/images/table.jpg",
  },
};

const CategoriesModal = ({ close, categoryKey }) => {
  // Получаем данные для переданного ключа
  const categoryData = data[categoryKey] || {
    title: "Нет данных",
    description: "Данные для этой категории отсутствуют",
    image: null,
  };

  return (
    <div>
      <div
        className="fixed z-1000 top-0 left-0 right-0 bottom-0 bg-primary h-screen"
        onClick={close}
      ></div>

      <div className="fixed z-1001 rounded-[20px] top-[15px] bg-modal p-[15px] right-[15px] left-[15px]">
        <div className="text-white uppercase font-main font-medium text-[15px] flex justify-between mb-[50px]">
          {categoryData.title}
          <Exit onClick={close} />
        </div>

        <p className="text-white text-[14px]">{categoryData.description}</p>

        {categoryData.image && (
          <img
            src={categoryData.image}
            alt={categoryData.title}
            className="w-full mt-[20px] rounded-[10px]"
          />
        )}
      </div>
    </div>
  );
};

export default CategoriesModal;
