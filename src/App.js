import "./App.css";

import React, { useState } from "react";

import Books from "./components/Books/Books";
import img from "./components/Book/images/book.png";
import BookForm from "./components/NewBookForm/NewBookForm";

function App() {
  const [books, setBooks] = useState([
    { id: 0, name: "book_name", author: "book_author", pages: 123, image: img },
    { id: 1, name: "book_name", author: "book_author", pages: 123, image: img },
  ]);

  const onBookSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.name.value);

    let newBooks = [
      ...books,
      {
        id: books.length,
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
  };

  const changeBookHandle = (event) => {
    event.preventDefault();

    let id = Number(event.target.id.value);

    let newBooks = books.slice();

    newBooks[id] = {
      id: id,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
      image: img,
    };

    setBooks(newBooks);
  };

  return (
    <div className="App">
      <BookForm onBookSubmit={onBookSubmit}></BookForm>
      <Books
        books={books}
        deleteBookHandle={deleteBookHandle}
        changeBookHandle={changeBookHandle}
      />
    </div>
  );
}

export default App;
