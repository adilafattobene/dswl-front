import React, { useContext } from "react";

import { BooksContext } from "../../context/BooksProvider";

export default function BookForm() {
  const { onBookSubmit } = useContext(BooksContext);

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
