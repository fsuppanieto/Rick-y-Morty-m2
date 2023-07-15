require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;
// const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    const { status, name, species, origin, image, gender, error } = data;
    const character = {
      id,
      status,
      name,
      species,
      origin,
      image,
      gender,
    };
    return name
      ? res.json(character)
      : res.status(404).json({ message: error });
  } catch (reason) {
    return res.status(500).json({ message: reason });
  }
};

module.exports = getCharById;

//-------------------------------------------------------------------------------------
//TODO EL CODIGO QUE HICE CON PROMISES, AHORA LO MODIFICO PARA TRABAJAR CON EXPRESS

// const axios = require("axios");
// const http = require("http");

// function getCharById(res, id) {
//   return new Promise((resolve, reject) =>
//     axios
//       .get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((response) => {
//         const character = {
//           id: id,
//           name: response.data.name,
//           gender: response.data.gender,
//           species: response.data.species,
//           origin: response.data.origin,
//           image: response.data.image,
//           status: response.data.status,
//         };
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(character));
//       })
//       .catch((err) => {
//         const message = "Ocurrió un error en la funcion de getCharById";
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(message);
//       })
//   );
// }
// module.exports = getCharById;
