const express = require('express');
const oas = require('./oas.json');
const manifest = require('./manifest.json');

// Api
const app = express();
const port = 3000;

// Datos estáticos de cafés en formato JSON
const cafes = [
  { id: 1, nombre: 'Café Americano', precio: 2.5 },
  { id: 2, nombre: 'Café Latte', precio: 3.0 },
  { id: 3, nombre: 'Café Espresso', precio: 2.0 },
  { id: 4, nombre: 'Café Cappuccino', precio: 3.5 },
  { id: 5, nombre: 'Café Mocha', precio: 4.0 },
  { id: 6, nombre: 'Café Macchiato', precio: 3.2 },
  { id: 7, nombre: 'Café Doble', precio: 3.8 },
  { id: 8, nombre: 'Café Frappé', precio: 4.5 },
  { id: 9, nombre: 'Café Viennese', precio: 3.7 },
  { id: 10, nombre: 'Café Irish', precio: 4.2 },
];

// Ruta para obtener la lista de cafés
app.get('/cafes', (req, res) => {
  console.log('Get cafes..');
  res.json(cafes);
});

// Ruta para obtener el precio de un café por su ID
app.get('/cafes/:id', (req, res) => {
  const cafeId = parseInt(req.params.id);
  const cafe = cafes.find((c) => c.id === cafeId);
  console.log('Get cafe', cafeId);

  if (cafe) {
    res.json(cafe);
  } else {
    res.status(404).json({ mensaje: 'Café no encontrado' });
  }
});

// Traigo open api specification.
app.get('/oas.json', (req, res) => {
  res.json(oas);
});

// Traigo el manifiesto.
app.get('/.well-known/ai-plugin.json', (req, res) => {
  res.json(manifest);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
