import React from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
};

return (
  <div>
    <h2>Добавить книгу</h2>
    <form onSubmit={AddBook}>
      <div>
        <label>
          Название книги:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Автор:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Год издания:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Жанр:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Добавить</button>
    </form>
  </div>
);

export default BookForm;
