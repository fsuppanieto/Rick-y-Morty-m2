import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
const URL = "http://localhost:3001/rickandmorty/character";
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character ? (
        <Card
          key={id}
          id={id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
        />
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./Detail.module.css";

// export default function Detail() {
//   const navigate = useNavigate();
//   const { detailId } = useParams();
//   const [character, setCharacter] = useState({});

//   useEffect(() => {
//     fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
//       .then((response) => response.json())
//       .then((char) => {
//         console.log(char);
//         if (char.name) {
//           setCharacter(char);
//         } else {
//           window.alert("No hay personajes con ese ID");
//         }
//       })
//       .catch((err) => {
//         window.alert("No hay personajes con ese ID");
//       });
//     return setCharacter({});
//   }, [detailId]);
//   return (
//     <div className={styles.container}>
//       <img src={character.image} alt={character.name} />
//       <h1>Name: {character.name}</h1>
//       <h2>Status: {character.status}</h2>
//       <h2>Specie: {character.species}</h2>
//       <h2>Gender: {character.gender}</h2>
//       <h2>Origin: {character.origin?.name}</h2>
//       <h2>Location: {character.location?.name}</h2>
//       <button onClick={() => navigate("/home")}>Volver</button>
//     </div>
//   );
// }
