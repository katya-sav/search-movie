import React, { useState } from "react";

import styles from "./SearchBar.module.css";

type TSearchBarProps = {
  onSubmit: (searchTerm: string) => Promise<void>;
};

export const SearchBar = ({ onSubmit }: TSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
