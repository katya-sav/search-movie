import React from "react";

import "./GlobalStyles.css";
import { Header } from "./components/Header/Header";
import { BooksList } from "./components/BooksList/BooksList";
import { useBooksList } from "./api";

export const App = () => {
  const { books, getBooks } = useBooksList();

  return (
    <div className="GlobalStyles">
      <Header onSearchSubmit={getBooks} />
      <BooksList books={books} />
    </div>
  );
};
