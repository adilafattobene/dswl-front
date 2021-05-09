import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Menu from "./components/Menu/Menu";
import BooksProvider from "./context/BooksProvider";
import Routes from "./routes";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <h1>Livros</h1>
        <br />
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </BrowserRouter>
    </div>
  );
}
