//Creando servidor con Express
require("dotenv").config();
const getCharById = require("../src/controllers/getCharById");
const express = require("express");
const router = require("./routes/index");
const server = express();
const { PORT } = process.env;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised on port: " + `${PORT}`);
});

// ESTO ES TODO LO QUE HICE CON WEBSERVER, LO COMENTE PORQUE LO PASO TODA A EXPRESS AHORA

// const http = require("http");
// const axios = require("axios");
// const getCharById = require("../src/controllers/getCharById");

// const server = http
//   .createServer((req, res) => {
//     if (req.url.includes("/rickandmorty/character")) {
//       const id = parseInt(req.url.split("/").pop(), 10);
//       getCharById(res, id)
//         .then((character) => {
//           res.writeHead(200, { "Content-Type": "application/json" });
//           res.end(JSON.stringify(character));
//         })
//         .catch((err) => {
//           res.writeHead(404, { "Content-Type": "text/plain" });
//           res.end("404 Not Found / o escribi mal la url o hice el codigo mal");
//         });
//     }
//   })
//   .listen(3001, "localHost");

//------------------------------------------------------------------------------

//!!! Por si tengo una duda, tengom que ver bien la Homewrok del PROMISES
// const data = require("../src/utils/data");
// const server = http
//!!! TODO LO QUE ESTA CON LAS // ES LO QUE ARME EN LA HOMEWORK DE WEB SERVER, Y, POR LO QUE ME PIDEN EN PROMISES, DEBO BUSCAR DE HACER LO MISMO PERO CON PROMISES, CREO QUE DEBERIA SER MAS CORTO EL CODIGO
// .createServer((req, res) => {
//     const { url } = req;
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (url.includes("/rickandmorty/character")) {
//       const urlParts = url.split("/");
//       const id = urlParts[urlParts.length - 1];
//       const character = data.find((character) => character.id === parseInt(id));
//       if (character) {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         return res.end("Character not found");
//       }
//     }
//   })
