import BookCard from "../BookCard/BookCard";
import img from "../BookCard/images/book.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Books(props) {
  const deleteBookHandle = (index) => {
    let newBooks = props.books.slice();

    newBooks.splice(index, 1);
    props.setBooks(newBooks);
  };

  const changeBookHandle = (event) => {
    event.preventDefault();

    let id = Number(event.target.id.value);

    let newBooks = props.books.slice();

    newBooks[id] = {
      id: id,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
      image: img,
    };

    props.setBooks(newBooks);
  };

  return (
    <div>
      {props.books.map((book, index) => {
        return (
          <div>
            <Link to={"/book/" + Number(book.id)} key={index}>
              <BookCard
                onClickDeleteBook={() => deleteBookHandle(index)}
                onBookEdit={changeBookHandle}
                name={book.name}
                author={book.author}
                pages={book.pages}
                image={book.image}
              >
                component_description
              </BookCard>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
