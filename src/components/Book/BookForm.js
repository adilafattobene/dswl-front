import React from "react";

export const BookForm = (props) => {
  return (
    <form onSubmit={props.onBookSubmit}>
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
};
