import React from "react";
import img from "../BookCard/images/book.png";

export default function BookForm(props) {
  const onBookSubmit = (event) => {
    event.preventDefault();

    let newBooks = [
      ...props.books,
      {
        id: props.books.length,
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value,
        image: img,
      },
    ];
    props.setBooks(newBooks);
  };

  return (
    <form onSubmit={onBookSubmit}>
      <input type="text" id="name" placeholder="Digite o nome do livro" />
      <input
        type="text"
        id="author"
        placeholder="Digite o nome da(o) autora(o)"
      />
      <input type="text" id="pages" placeholder="Digite o número de páginas" />
      <input type="submit" value="Cadastrar" />
    </form>
  );
}
