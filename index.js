var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Jódar y jaen');
});
app.put('/:persona1/:persona2',function(req, res){
	res.send(req.params.persona1+" y "+req.params.persona2+" se van de vacaciones juntos");
});


//se ha realizado esta modificación  en el listen en el ejercicio 4 debido a que, si no se realiza esto
//el test en travis no para y se queda continuamente ejecutando
var port=process.env.PORT || 3000
if(!module.parent){
  app.listen(port);
  console.log('El servicio está corriendo en el puerto si no para la has liado:' + port );
}

module.exports = app