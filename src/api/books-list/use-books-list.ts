import { useState, useCallback } from "react";

import { TBook } from "../../types";
import { mapBooksList } from "./map-books-list";

export const useBooksList = () => {
  const [books, setBooks] = useState<TBook[]>([]);

  const getBooks = useCallback(async (searchTerm: string) => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}&page=1`
    );
    const rawData = await response.json();
    const data = mapBooksList(rawData);

    console.log(rawData);

    setBooks(data);
  }, []);

  return {
    books,
    getBooks,
  };
};
