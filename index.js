var express = require('express');
var app = express();
var {datos,historial,size,anhade,editar,borrardatos,buscartwitter,tweetfecha,tweetfechaprecisa,tweetconrespectouser,tweetmaslike,tweetmasretweet}=require("./comentario.js");
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
