import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = function ({ onSearch, logOut }) {
  const [id, setId] = useState(" ");

  const handleChange = function (event) {
    setId(event.target.value);
  };
  const handleSearch = () => {
    onSearch(id);
    setId(" ");
  };
  const handleRandom = function () {
    let random = Number(Math.floor(Math.random() * 826));
    onSearch(random);
  };
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className={styles.container}>
      <input type="search" onChange={handleChange} value={id}></input>
      <button onClick={handleSearch}>Agregar</button>
      <button onClick={handleRandom}>Random</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};
export default SearchBar;

// export default function SearchBar(props) {
//   const [userInput, setUserImput] = useState("");

//   function handleChange(e) {
//     setUserImput(e.target.value);
//   }

//   return (
//     <div className={styles.container}>
//       <input
//         placeholder="Character..."
//         type="text"
//         value={userInput}
//         onChange={(e) => handleChange(e)}
//       />
//       <button onClick={() => props.onSearch(userInput)}>Agregar</button>
//       <button
//         onClick={() => props.onSearch(Math.floor(Math.random(userInput) * 828))}
//       >
//         Random
//       </button>
//       <button onClick={() => props.logOut()}>LogOut</button>
//     </div>
//   );
// }
