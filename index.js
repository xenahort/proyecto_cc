var express = require('express');
var aplicacion = express();
var cliente = require('mongodb').MongoClient;
var url = "mongodb://localhost/database";
var tamanho=0;

//se crea la base de datos
cliente.connect(url,{ useNewUrlParser: true }, function(err, db) {
  console.log("Se crea la base de datos");
  var inst = db.db("database");
  inst.createCollection("aplicacion", function(err, res) { //https://docs.mongodb.com/manual/reference/method/db.createCollection/
    console.log("Creada la base de datos");
    db.close();
  });
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


//Crear el ok
aplicacion.get('/', function (req, res) {
  res.send({
    "status": "OK",
    "ejemplo": { "ruta": "/datos",
    "valor": { "Tamanho de la base de datos": tamanho }
    }
  });
});

//Leer los datos 
aplicacion.get('/datos', function (req, res) {
  cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var inst = db.db("database");
    inst.collection("aplicacion").toArray(function(err, res) {
      res.sendStatus(200);
      db.close();
    });
  });
});

//crear
aplicacion.post('/datos/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet', function(req,res){
  anhade(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
   cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var inst = db.db("database");
    inst.collection("aplicacion").insertOne(comentario, function(err, res) {   //https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/
      db.close();
    });
  });
  tamanho=tamanho+1;
  res.sendStatus(200);

});

//editar
aplicacion.put('/datos/:i/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet',function(req, res){
  anhade(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
  cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var inst = db.db("database");
    var mq = { idtwitter: req.params.idtwitter, iduser: req.params.iduser, etiqueta: req.params.etiqueta, dia: req.params.dia, mes: req.params.mes, anho: req.params.anho, hora: req.params.hora, min: req.params.minutos, nlikes: req.params.nlike, nretweet: req.params.nretweet};
    var nvalor = { $set: comentario }; 
    inst.collection("aplicacion").updateOne(mq, nvalor, function(err, res) { //https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
      db.close();
    });
  });
  res.sendStatus(200);

});

//borrar
aplicacion.delete('/datos/:i',function(req,res){
  cliente.connect(url, { useNewUrlParser: true },function(err, db) {
    var inst = db.db("database");
    var mq = { idtwitter: req.params.idtwitter, iduser: req.params.iduser, etiqueta: req.params.etiqueta, dia: req.params.dia, mes: req.params.mes, anho: req.params.anho, hora: req.params.hora, min: req.params.minutos, nlikes: req.params.nlike, nretweet: req.params.nretweet};
    inst.collection("aplicacion").deleteOne(mq, function(err, res) {  //https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/
      res.sendStatus(200);
      db.close();
    });
  });
  tamanho=tamanho-1;
});


//se ha realizado esta modificación  en el listen en el ejercicio 4 debido a que, si no se realiza esto
//el test en travis no para y se queda continuamente ejecutando


var port = process.env.PORT || 80;
if(!module.parent){
  aplicacion.listen(port);
  console.log('el servidor está funcionando en el puerto ' + port + '/');
}

module.exports = aplicacion;


