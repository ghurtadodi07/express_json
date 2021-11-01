var express = require('express');
var app = express();
var square = require('./square');
var wiki = require('./wiki.js');
var express2 = require('express');
var router = express2.Router();

app.use('/wiki', wiki);
app.use(express.json()); // built-in middleware for express
// Utilizamos la función require() El nombre del archivo se ingresa sin la extensión (opcional) .js
// invocamos el metodo area()
console.log('El area de un cuadrado con lado de 5 es ' + square.area(5));

app.post('/markdown', function(request, response){
 	let myJson = request.body;
	let myValue = request.body.myKey;
	response.send(myJson);
});

// Home page route
router.get('/', function(req, res) {
  res.send('Página de inicio Wiki');
});

// About page route
router.get('/about', function(req, res) {
  res.send('Acerca de esta wiki');
});


app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});