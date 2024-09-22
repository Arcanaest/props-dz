// 3. Звездный рейтинг
// Создай компонент StarRating, который принимает пропс rating (число от 1 до 5) и отображает соответствующее количество звезд (можно использовать символ "★").
// В родительском компоненте передай разные значения для rating, чтобы отображать рейтинг для нескольких продуктов.
import "../App.css";
import { useState } from "react";
import StarRating from "./star-rating";

const Task3 = () => {
  const products = [
    { id: 1, name: "Product 1", rating: 5 },
    { id: 2, name: "Product 2", rating: 2 },
    { id: 3, name: "Product 3", rating: 3 },
    { id: 4, name: "Product 4", rating: 4 },
    { id: 5, name: "Product 5", rating: 1 },
  ];

  return (
    <div>
      {products.map(({ id, name, rating }) => (
        <div key={id} className="product">
          <h3>{name}</h3>
          <StarRating rating={rating} />
        </div>
      ))}
      ;
    </div>
  );
};
export default Task3;
