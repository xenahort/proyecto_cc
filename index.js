const mongoose = require('mongoose');
var express = require('express');
var aplicacion = express();
var cliente = require('mongodb').MongoClient;
var url = "mongodb://localhost/database";


cliente.connect(url,{ useNewUrlParser: true }, function(err, db) {
  var dbo = db.db("database");
  dbo.createCollection("aplicacion", function(err, res) {
    console.log("Se crea la base de datos");
    db.close();
  });
});

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

function anhade(idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){
  comentario.idtwitter=idtwitter;
  comentario.iduser=iduser;
  comentario.etiqueta=etiqueta;
  comentario.dia=dia;
  comentario.mes=mes;
  comentario.anho=anho;
  comentario.hora=hora;
  comentario.min=min;
  comentario.nlikes=nlikes;
  comentario.nretweet=nretweet;
}


//Crear el ok
aplicacion.get('/', function (req, res) {
  res.send({
    "status": "OK",
    "ejemplo": { "ruta": "/datos",
    "valor": { "Tamanho de la base de datos": size }
    }
   });
});

//Leer los datos 
aplicacion.get('/datos', function (req, res) {

  res.setHeader('Content-Type', 'applicaton/json')

  cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var dbo = db.db("database");
    var mysort = { time: 1 };
    dbo.collection("aplicacion").find().sort(mysort).toArray(function(err, result) {
      res.send(JSON.stringify(result));
      db.close();
    });
  });
});

//crear
aplicacion.post('/datos/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet', function(req,res){
  res.setHeader('Content-Type', 'applicaton/json')
  anhade(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
   cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var dbo = db.db("database");
    dbo.collection("aplicacion").insertOne(comentario, function(err, res) {
      db.close();
    });
  });
  size=size+1;
  res.sendStatus(200);

});

//editar
aplicacion.put('/datos/:i/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet',function(req, res){
  res.setHeader('Content-Type', 'applicaton/json');
  anhade(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
  
  cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var dbo = db.db("database");
    var myquery = { latitude: req.params.lat, longitude: req.params.lng, username: req.params.user }; //cambiar
    var newvalues = { $set: comentario }; //cambiar
    dbo.collection("aplicacion").updateOne(myquery, newvalues, function(err, res) {
      console.log("1 document updated");
      db.close();
    });
  });
  res.sendStatus(200);

});


//borrar
aplicacion.delete('/datos/:i',function(req,res){

   res.setHeader('Content-Type', 'applicaton/json')

  cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var dbo = db.db("database");
    var myquery = { latitude: req.params.lat, longitude: req.params.lng, username: req.params.user }; //cambiar
    dbo.collection("aplicacion").deleteOne(myquery, function(err, obj) {
      console.log("1 document deleted");
      res.sendStatus(200);
      db.close();
    });

  });
  size=size-1;
});


//se ha realizado esta modificación  en el listen en el ejercicio 4 debido a que, si no se realiza esto
//el test en travis no para y se queda continuamente ejecutando


var port = process.env.PORT || 80;
if(!module.parent){
  aplicacion.listen(port);
  console.log('el servidor está funcionando en el puerto ' + port + '/');
}

module.exports = aplicacion;


