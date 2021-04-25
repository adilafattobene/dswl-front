import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Books from "./components/Books/Books";
import Book from "./components/Book/Book";
import Menu from "./components/Menu/Menu";
import img from "./components/BookCard/images/book.png";
import BookForm from "./components/NewBookForm/NewBookForm";

export default function App() {
  const [books, setBooks] = useState([
    { id: 0, name: "book_name", author: "book_author", pages: 123, image: img },
    { id: 1, name: "book_name", author: "book_author", pages: 123, image: img },
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <h1>Livros</h1>
        <Switch>
          <Redirect from="/" to="/books" exact />

          <Route path="/books" exact>
            <Books books={books} setBooks={setBooks} />
          </Route>

          <Route path="/books/new-book">
            <BookForm books={books} setBooks={setBooks} />
          </Route>

          <Route path="/book/:id" exact>
            <Book />
          </Route>

          <Route render={() => <div>Página não encontrada</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
