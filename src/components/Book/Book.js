import { BookImage } from "./BookImage";
import React from "react";
import "./Book.css";

export const Book = (props) => {
  return (
    <div className="Book">
      <p>
        {props.name}
        <BookImage src={props.image} />
      </p>
      <p>{props.author}</p>
      <p>{props.pages}</p>
      <p>{props.children}</p>
    </div>
  );
};
