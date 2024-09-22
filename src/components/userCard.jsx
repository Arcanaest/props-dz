import React from "react";


const UserCard = ({ name, age, occupation }) => {
  return (
    <div className="userCard">
      <h3>Имя:  {name} </h3>
      <h3>Возраст:  {age} </h3>
      <h3>Профессия:  {occupation} </h3>
    </div>
  );
};

export default UserCard;
