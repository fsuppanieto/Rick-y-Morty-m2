// COMO SE PIDE EN EL README
const users = require("../utils/users");
const login = (req, res) => {
  const { email, password } = req.body;
  console.log("Email:", email);
  console.log("Password:", password);

  let access = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });
  return res.json({ access });
};

module.exports = login;

// CON EL ARCHIVO .ENV
// require("dotenv").config();
// const { EMAIL, PASSWORD } = process.env;
// function login(req, res) {
//   const { email, password } = req.query;
//   let access = false;
//   if (email === EMAIL && password === PASSWORD) {
//     access = true;
//   }
//   return res.json({ access });
// }
// module.exports = login;
