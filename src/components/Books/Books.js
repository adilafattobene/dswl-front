import React from "react";
import Book from "../Book/Book";

export default function Books(props) {
  return (
    <div>
      {props.books.map((book, index) => {
        return (
          <div>
            {console.log(index)}
            <Book
              onClickDeleteBook={() => props.deleteBookHandle(index)}
              onBookEdit={props.changeBookHandle}
              index={index}
              name={book.name}
              author={book.author}
              pages={book.pages}
              image={book.image}
            >
              component_description
            </Book>
          </div>
        );
      })}
    </div>
  );
}
