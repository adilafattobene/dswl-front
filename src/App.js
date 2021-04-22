import "./App.css";

import React, { useState } from "react";

import { Book } from "./components/Book/Book";
import img from "./components/Book/images/book.png";
import { BookForm } from "./components/Book/BookForm";

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
    }

    setBooks(newBooks);
  };

  return (
    <div className="App">
      <BookForm onBookSubmit={onBookSubmit}></BookForm>

      {books.map((book, index) => {
        return (
          <>
            {console.log(index)}
            <Book
              onClickDeleteBook={() => deleteBookHandle(index)}
              onBookEdit={changeBookHandle}
              index={index}
              name={book.name}
              author={book.author}
              pages={book.pages}
              image={book.image}
            >
              component_description
            </Book>
          </>
        );
      })}
    </div>
  );
}

export default App;
