import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import style from "./Card.module.css";

function Card({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  location,
  myFavorites,
  addFav,
  removeFav,
  onClose,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    console.log(myFavorites);
    myFavorites.forEach((fav) => {
      console.log(fav.id, id);
      if (fav.id === id) {
        console.log("si");
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, species, status, gender, origin, image });
    setIsFav(!isFav);
  };

  const handleCloseClick = () => {
    onClose(id);
  };

  return (
    <div className={style.container}>
      <div className={style.front}>
        <img className={style.image} src={image} alt="Personaje de R&M" />
        <h2>
          {" "}
          {"Id: "} {id}{" "}
        </h2>

        <h2 className={style.data}>{name}</h2>
      </div>
      <div className={style.back}>
        <div className={style.buttonContainer}>
          <button
            onClick={() => handleFavorite()}
            className={style.favoriteButton}
          >
            {isFav ? "❤️" : "🤍"}
          </button>
          <button
            onClick={() => handleCloseClick(id)}
            className={style.closeButton}
          >
            X
          </button>
        </div>
        <h2>
          {" "}
          {"Species: "} {species}{" "}
        </h2>
        <h2>
          {" "}
          {"Gender: "} {gender}{" "}
        </h2>

        <h2>
          {" "}
          {"Status: "} {status}{" "}
        </h2>
        <h2>
          {" "}
          {"Location: "} {location}{" "}
        </h2>
        <h2>
          {" "}
          {"Origin: "}
          {origin}{" "}
        </h2>
        <Link to={`/detail/${id}`}>
          <div className={style.cardName}>{"¿ More info ?"}</div>
        </Link>
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
