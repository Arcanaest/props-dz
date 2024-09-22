// 1. Создай компонент Button, который принимает пропс label и отображает кнопку с переданным текстом.
// В родительском компоненте используй Button несколько раз, передавая разные надписи для кнопок (например, "Купить", "Подробнее").
import "../App.css";
import BtnComp from "./btnComp";

const Task1 = () => {
  const buttons = [
    { label: "Купить" },
    { label: "Оформить заказ" },
    { label: "Добавить в избранное" },
    { label: "Очистить корзину" },
    { label: "Назад" },
  ];

  return (
    <>
      {buttons.map(({ label }, i) => (
        <BtnComp 
        key={i} 
        label={label} 
        />
      ))}
    </>
  );
};

export default Task1;
