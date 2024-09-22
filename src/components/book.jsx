import React from "react";
i

const Book = ({ title, author, year, genre }) => {
  return (
    <div className="book">
      <h4>{title}</h4>
      <p>Автор: {author}</p>
      <p>Год издания: {year}</p>
      <p>Жанр: {genre}</p>
    </div>
  );
};

export default Book;
