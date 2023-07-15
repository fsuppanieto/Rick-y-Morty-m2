import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "filter":
        dispatch(filterCards(value));
        break;
      case "order":
        dispatch(orderCards(value));
        setAux(!aux);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>Mis Favoritos</h1>
      <Link to="/home">
        <button>Inicio</button>
      </Link>
      <div>
        <select onChange={handleChange}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleChange}>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
          <option value="All">Todos</option>
        </select>
        {myFavorites.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};
// const mapDispatchToProps = (dispatch) => ({
//   orderCards: () => dispatch(orderCards),
//   filterCards: () => dispatch(filterCards),
// });

export default connect(mapStateToProps)(Favorites);
