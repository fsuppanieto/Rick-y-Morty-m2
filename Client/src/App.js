import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import styles from "./App.css";
// const URL = "http://localhost:3001/rickandmorty/character/";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const username = "fsuppanieto@hotmail.com";
  const password = "123";

  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login";
    try {
      const { email, password } = userData;
      const { data } = await axios(
        `${URL}?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logOut() {
    setAccess(false);
    navigate("/");
  }

  const onClose = (id) => {
    const filtered = characters.filter((chars) => chars.id !== id);
    setCharacters(filtered);
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`${URL}/${id}`);
      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className={"App"} style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav logOut={logOut} onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

//   fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       if (data.name) {
//         if (!characters.some((character) => character.id === data.id)) {
//           setCharacters((oldChars) => [...oldChars, data]);
//           navigate("/home");
//         } else window.alert("Personaje Repetido");
//       } else {
//         window.alert("No hay personajes con ese ID");
//       }
//       navigate("/home");
//     });
// };
