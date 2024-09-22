// 2. Создай компонент UserCard, который принимает пропсы: name, age, и occupation. Компонент должен отображать карточку с информацией о пользователе (например: "Имя: Иван, Возраст: 25, Профессия: Программист").
// В родительском компоненте отобрази несколько карточек для разных пользователей.
import "../App.css";
import UserCard from "./userCard.jsx"; // Импортируем компонент UserCard

const Task2 = () => {
  const userCard = [
    { name: "Ранд ", age: 20, occupation: "Дракон Возрожденный" },
    { name: "Мэтт ", age: 20, occupation: "Игрок" },
    { name: "Эгвейн ", age: 19, occupation: "Престол Амерлин" },
    { name: "Перрин ", age: 20, occupation: "Лорд Манетерены" },
    { name: "Морейн ", age: 44, occupation: "Айз-Седай" },
  ];

  return (
    <>
      {userCard.map(({ name, age, occupation }, i) => (
        <UserCard key={i} name={name} age={age} occupation={occupation} />
      ))}
    </>
  );
};

export default Task2;
