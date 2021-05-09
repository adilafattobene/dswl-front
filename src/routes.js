import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";

import Books from "./components/Books/Books";
import Book from "./components/Book/Book";

import BookForm from "./components/NewBookForm/NewBookForm";

export default function routes() {
  return (
    <Switch>
      <Redirect from="/" to="/books" exact />

      <Route path="/books" exact>
        <Books />
      </Route>

      <Route path="/books/new-book">
        <BookForm />
      </Route>

      <Route path="/book/:id" exact>
        <Book />
      </Route>

      <Route render={() => <div>Página não encontrada</div>} />
    </Switch>
  );
}
