import "./App.css";

import React, { useState } from "react";

import { Book } from "./components/Book/Book";
import img from "./components/Book/images/book.png";
import { BookForm } from "./components/Book/BookForm";

function App() {
  const [books, setBooks] = useState([
    { name: "book_name", author: "book_author", pages: 123, image: img },
    { name: "book_name", author: "book_author", pages: 123, image: img },
  ]);

  const onBookSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);

    let newBooks = [
      ...books,
      {
        id: books.length + 1,
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value,
        image: img,
      },
    ];
    setBooks(newBooks);
  };

  const deleteBookHandle = (index) => {
    let newBooks = books.slice();
    newBooks.splice(index, 1);
    setBooks(newBooks);
    console.log(books);
  };

  return (
    <div className="App">
      <BookForm onBookSubmit={onBookSubmit}></BookForm>
      {books.map((book, index) => {
        return (
          <Book
            onClickDeleteBook={() => deleteBookHandle(index)}
            key={book.id}
            name={book.name}
            author={book.author}
            pages={book.pages}
            image={book.image}
          >
            component_description
          </Book>
        );
      })}
      {/* <button onClick={onHandleSubmit}>Adicionar livro</button> */}
    </div>
  );
}

export default App;
