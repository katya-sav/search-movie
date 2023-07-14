import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { changeSearchTerm } from "../../store/slices/movies-slice";
import styles from "./SearchBar.module.css";

type TSearchBarProps = {
  onSubmit: (searchTerm: string) => void;
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
          placeholder="Enter Movie"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

// export const SearchBar = ({ onSubmit }: TSearchBarProps) => {
//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state: any) => {
//     return state.movies.searchTerm;
//   });

//   const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     onSubmit(searchTerm);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(changeSearchTerm(event.target.value));
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           className={styles.input}
//           value={searchTerm}
//           placeholder="Enter Movie"
//           onChange={handleChange}
//         />
//       </form>
//     </div>
//   );
// };
