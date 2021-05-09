import BookCard from "../BookCard/BookCard";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../../context/BooksProvider";

export default function Books() {
  const { books, deleteBookHandle, changeBookHandle } = useContext(
    BooksContext
  );

  return (
    <div>
      {books.map((book, index) => {
        return (
          <div>
            <BookCard
              onClickDeleteBook={() => deleteBookHandle(index)}
              onBookEdit={changeBookHandle}
              name={book.name}
              author={book.author}
              pages={book.pages}
              image={book.image}
            >
              component_description
              <br />
              <br />
              <Link to={"/book/" + Number(book.id)} key={index}>
                {" "}
                Clique para saber mais...
              </Link>
            </BookCard>
          </div>
        );
      })}
    </div>
  );
}
