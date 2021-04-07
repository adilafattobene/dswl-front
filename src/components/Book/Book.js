import { BookImage } from "./BookImage";
import React from "react";

export const Book = (props) => {
  return (
    <>
      <p>
        {props.name}
        <BookImage src={props.image} />
      </p>
      <p>{props.author}</p>
      <p>{props.pages}</p>
      <p>{props.children}</p>
    </>
  );
};
