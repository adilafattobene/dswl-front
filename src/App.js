import "./App.css";

import React, { useState } from "react";

import Books from "./components/Books/Books";
import Menu from "./components/Menu/Menu";
import img from "./components/Book/images/book.png";
import BookForm from "./components/NewBookForm/NewBookForm";

export default function App() {
  const [books, setBooks] = useState([
    { id: 0, name: "book_name", author: "book_author", pages: 123, image: img },
    { id: 1, name: "book_name", author: "book_author", pages: 123, image: img },
  ]);

  return (
    <div className="App">
      <Menu/>
      <BookForm books={books} setBooks={setBooks} />
      <Books books={books} setBooks={setBooks} />
    </div>
  );
}
