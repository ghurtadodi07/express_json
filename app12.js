var express = require('express');
var app = express();

app.get('/home/:name', function(req, res) {
  res.send('Hola Mundo! buenos dia Sr  '+ req.params.name);
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});


//http://localhost:3000/home/?name=Gerardo
//http://localhost:3000/home/Gerardo
//https://www.codegrepper.com/code-examples/javascript/express+get+variable+from+url