import React, { useEffect, useState } from "react";
import img from "../components/BookCard/images/book.png";

export const BooksContext = React.createContext();

const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);

  console.log("[BooksProvider]");

  useEffect(() => {
    console.log("[BooksProvider]", books);

    setBooks([
      {
        id: 0,
        name: "book_name",
        author: "book_author",
        pages: 123,
        image: img,
      },
      {
        id: 1,
        name: "book_name",
        author: "book_author",
        pages: 123,
        image: img,
      },
    ]);
  }, []);

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

  const deleteBookHandle = (index) => {
    let newBooks = books.slice();

    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const onBookSubmit = (event) => {
    event.preventDefault();

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

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        deleteBookHandle,
        changeBookHandle,
        onBookSubmit,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
