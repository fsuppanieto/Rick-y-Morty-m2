import Card from "../Card/Card";
import styled from "./Cards.module.css";
export default function Cards(props) {
  // props -> { characters} undefined
  return (
    <div className={styled.container}>
      {props.characters?.map(
        ({ id, name, species, status, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={props.onClose}
          />
        )
      )}
    </div>
  );
}

// import Card from "../Card/Card";
// import styles from "./Cards.module.css";

// export default function Cards({ characters, onClose }) {
//   return (
//     <div className={styles.container}>
//       {characters.map((character) => (
//         <Card
//           key={character.id}
//           id={character.id}
//           name={character.name}
//           species={character.species}
//           gender={character.gender}
//           image={character.image}
//           onClose={onClose}
//           status={character.status}
//           location={character.location.name}
//           origin={character.origin.name}
//         />
//       ))}
//     </div>
//   );
// }
