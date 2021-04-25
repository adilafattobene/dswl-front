import React, { useState } from "react";
import { BookImage } from "./BookImage";
import "./Book.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ModalBook from "./ModalBook";

export default function Book(props) {
  const [openModal, setOpenModal] = useState(false);

  const book = {
    id: props.index,
    name: props.name,
    author: props.author,
    pages: props.pages,
    child: props.children,
  };

  return (
    <div className="Book">
      <div>
        <p>
          {props.name}
          <BookImage src={props.image} />
        </p>
        <p>{props.author}</p>
        <p>{props.pages}</p>
        {props.children}
      </div>
      <DeleteForeverIcon onClick={props.onClickDeleteBook} />
      <ModalBook
        book={book}
        openModal={openModal}
        setOpenModal={setOpenModal}
        onBookEdit={props.onBookEdit}
      />
    </div>
  );
};
