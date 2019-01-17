
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var express = require('express');
var app = express();
var {datos,historial,size,anhade,editar,borrardatos,buscartwitter,tweetfecha,tweetfechaprecisa,tweetconrespectouser,tweetmaslike,tweetmasretweet}=require("./comentario.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var link = 'mongodb://localhost/tabla';
mongoose.connect(link,{ useNewUrlParser: true });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/mydb";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("app", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
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

function createdata(idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){
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
//app.use(session({ secret: 'passport', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
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

  res.setHeader('Content-Type', 'applicaton/json')

  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { time: 1 };
    dbo.collection("app").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      res.send(JSON.stringify(result));
      db.close();
    });
  });
});

//crear
app.post('/datos/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet', function(req,res){
  res.setHeader('Content-Type', 'applicaton/json')
  createdata(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
   MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("app").insertOne(data, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });
  size=size+1;
  res.send("Created new position: "+JSON.stringify(data));

});
 // res.sendStatus(200);
//});
//editar
app.put('/datos/:i/:idtwitter/:iduser/:etiqueta/:dia/:mes/:anho/:hora/:minutos/:nlike/:nretweet',function(req, res){
  res.setHeader('Content-Type', 'applicaton/json');
  createdata(req.params.idtwitter,req.params.iduser,req.params.etiqueta,req.params.dia,req.params.mes,req.params.anho,req.params.hora,req.params.minutos,req.params.nlike,req.params.nretweet);
  
  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { latitude: req.params.lat, longitude: req.params.lng, username: req.params.user }; //cambiar
    var newvalues = { $set: data };
    dbo.collection("app").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
  res.send("Modified value: "+JSON.stringify(data));

});


  //res.sendStatus(200);

//});
//borrar
app.delete('/datos/:i',function(req,res){

   res.setHeader('Content-Type', 'applicaton/json')

  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { latitude: req.params.lat, longitude: req.params.lng, username: req.params.user };
    dbo.collection("app").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      res.send("Value deleted: "+JSON.stringify(obj));
      db.close();
    });

  });
  size=size-1;
});
//  res.sendStatus(200);
//});

//se ha realizado esta modificación  en el listen en el ejercicio 4 debido a que, si no se realiza esto
//el test en travis no para y se queda continuamente ejecutando

var port = process.env.PORT || 80;
if(!module.parent){
  app.listen(port);
  console.log('el servidor está funcionando en el puerto ' + port + '/');
}

module.exports = app;
