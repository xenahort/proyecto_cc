var express = require('express');
<<<<<<< HEAD
var app = express();
var {datos,historial,size,anhade,editar,borrardatos,buscartwitter,tweetfecha,tweetfechaprecisa,tweetconrespectouser,tweetmaslike,tweetmasretweet}=require("./comentario.js");
=======
var aplicacion = express();
var cliente = require('mongodb').MongoClient;
var url = "mongodb://localhost/database";
var tamanho=0;
var bunyan = require('bunyan');

//se crea la base de datos
cliente.connect(url,{ useNewUrlParser: true }, function(err, db) {
  console.log("Se crea la base de datos");
  var inst = db.db("database");
  inst.createCollection("aplicacion", function(err, res) { //https://docs.mongodb.com/manual/reference/method/db.createCollection/
    console.log("Creada la base de datos");
    db.close();
  });
});

// Código creado a partir de https://www.npmjs.com/package/bunyan
var log = bunyan.createLogger({ 
  name: 'index',
  streams: [
    {
      level: 'error',
      path: './error.log'  
    }
  ]
});

//creamos nuestro vector numérico llamada comentario.
var comentario = {
  idtwitter:0,
  iduser:0,
  etiqueta:0,
  dia:0,
  mes:0,
  anho:0,
  hora:0,
  min:0,
  nlikes:0,
  nretweet:0
}

//creamos la funcion añadir

function anhade(idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){
  comentario.idtwitter = idtwitter;
  comentario.iduser = iduser;
  comentario.etiqueta = etiqueta;
  comentario.dia = dia;
  comentario.mes = mes;
  comentario.anho = anho;
  comentario.hora = hora;
  comentario.min = min;
  comentario.nlikes = nlikes;
  comentario.nretweet = nretweet;
 
}


>>>>>>> 908ef73c0156c1ca9a069daa5c5d7a852615f26f
//Crear el ok
app.get('/', function (req, res) {
  res.send({
    "status": "OK",
    "ejemplo": { "ruta": "/datos",
    "valor": { "Tamanho de la base de datos": size }
    }
   });
});

//Leer los datos 
app.get('/datos', function (req, res) {

  res.send(JSON.stringify(historial));
});

//crear
app.post('/datos/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet', function(req,res){

  anhade(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
  res.sendStatus(200);
});
//editar
app.put('/datos/:i/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet',function(req, res){

  editar(req.params.i,req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
  res.sendStatus(200);

});
//borrar
app.delete('/datos/:i',function(req,res){

  salida=borrardatos(req.params.i);
  res.sendStatus(200);
});

//se ha realizado esta modificación  en el listen en el ejercicio 4 debido a que, si no se realiza esto
//el test en travis no para y se queda continuamente ejecutando

var port = process.env.PORT || 80;
if(!module.parent){
  app.listen(port);
  console.log('el servidor está funcionando en el puerto ' + port + '/');
}

module.exports = app;
