const express = require("express");
const app = express();
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "H1u2n3e4s",
    database: "react",
})

app.get("/", (req, res) => {
  let SQL = "INSERT INTO cadastro (email, senha) VALUES ('teste@teste.com', '1234')";

  db.query(SQL, (err, result) => {
      console.log(err);
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});