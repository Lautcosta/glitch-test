const fs = require("fs");
const express = require("express");
const Contenedor = require("./contenedor");
const app = express();
const PRODUCTS = new Contenedor("productos.txt");
PRODUCTS.init();

app.on("error", (error) => {
  console.log("Hubo un error");
});

app.get("/", (request, response) => {
  response.send(`<h1 style='color:blue;'>Bienvenidos a Express</h1>`);
});

app.get("/productos", (request, response) => {
  response.send(PRODUCTS.getAll());
});

app.get("/productoRandom", (request, response) => {
  response.send(PRODUCTS.getById(Math.floor(Math.random() * (PRODUCTS.countID - 1 + 1) + 1)));
});

const PORT =8080;

const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on('error',error => console.log(`Este es el error ${error}`))