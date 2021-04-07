import "./App.css";

import React, { useState } from "react";

import { Book } from "./components/Book/Book";
import img from "./components/Book/images/book.png";

function App() {
  const [books, setBooks] = useState([
    { name: "book_name", author: "book_author", pages: 123, image: img },
    { name: "book_name", author: "book_author", pages: 123, image: img },
  ]);

  const onHandleSubmit = () => {
    let newBook = [
      ...books,
      {
        id: books.length + 1,
        name: "book_name",
        author: "book_author",
        pages: 123,
        image: img,
      },
    ];
    setBooks(newBook);
  };

  return (
    <div className="App">
      {books.map((book) => {
        return (
          <Book
            name={book.name}
            author={book.author}
            pages={book.pages}
            image={book.image}
          >
            component_description
          </Book>
        );
      })}
      <button onClick={onHandleSubmit}>Adicionar livro</button>
    </div>
  );
}

export default App;
