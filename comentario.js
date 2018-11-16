var datos = {
  idtwitter:0,
  iduser:0,
  etiqueta:0,
  dia:0,
  mes:0,
  anho:0,
  hora:0,
  min:0,
  nlikes:0,
  nretweet:0,
  sustidtwitter: function(idtwitter) {
    this.idtwitter=idtwitter;
  },
  sustiduser: function(iduser) {
    this.iduser=iduser;
  },
  suslabel: function(etiqueta) {
    this.etiqueta=etiqueta;
  },
  susday: function(dia){
    this.dia=dia;
  },
  susmonth: function(mes){
    this.mes=mes;
  },
  susyear: function(anho){
    this.anho=anho;
  },
  sushora: function(hora){
    this.hora=hora;
  },
  susminuto: function(min){
    this.min=min;
  },
  suslike: function(nlikes){
    this.nlikes=nlikes;
  },
  susretweet: function(nretweet){
    this.nretweet=nretweet;
  },
  daridtwitter: function(){
    return idtwitter;
  },
  dariduser: function(){
    return iduser;
  },
  darlabel: function(){
    return etiqueta;
  },
  darday: function() {
    return dia;
  },
  darmonth: function(){
    return mes;
  },
  daryear: function(){
    return anho;
  },
  darhora: function(){
    return hora;
  },
  darmin: function(){
    return min;
  },
  darnlikes: function(){
    return nlikes;
  },
  darnretweet: function(){
    return nretweet;
  }
}

historial=[];
size=0;

function anhade(idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){
  let archivo = {};
  for (let partes in datos) {
    archivo[partes] = datos[partes];
  }
  archivo.sustidtwitter(idtwitter);
  archivo.sustiduser(iduser);
  archivo.suslabel(etiqueta);
  archivo.susday(dia);
  archivo.susmonth(mes);
  archivo.susyear(anho);
  archivo.sushora(hora);
  archivo.susminuto(min);
  archivo.suslike(nlikes);
  archivo.susretweet(nretweet);
  historial.push(archivo);
  size=size+1;

  return size;
}

function editar(i,idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){

  historial[i].sustidtwitter(idtwitter);
  historial[i].sustiduser(iduser);
  historial[i].suslabel(etiqueta);
  historial[i].susday(dia);
  historial[i].susmonth(mes);
  historial[i].susyear(anho);
  historial[i].sushora(hora);
  historial[i].susminuto(min);
  historial[i].suslike(nlikes);
  historial[i].susretweet(nretweet);

  return size;
}

function borrardatos(i){
  size=size-1;
  salida=historial.splice(i,1);
  return salida;
}

function buscartwitter(idtwitte){
  var verificar = 0;
  for (var i = 0; i < size;i++) {
    if(verificar <= 0){
      if(idtwitte == historial[i].daridtwitter()){
      verificar=1;
      }
    }
  }
  return verificar;
}

function tweetfecha(dia,mes,anho){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(dia == historial[i].darday()){
      if (mes == historial[i].darmonth()) {
        if(anho == historial[i].daryear()){
          archivo.push(historial[i].daridtwitter());
          longitud = longitud + 1;
        }
      }
    }
  }
  return longitud;
}
function tweetfechaprecisa(dia,mes,anho,hora,min){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(dia == historial[i].darday()){
      if (mes == historial[i].darmonth()) {
        if(anho == historial[i].daryear()){
          if(hora == historial[i].darhora()){
            if(min == historial[i].darmin()){
              archivo.push(historial[i].daridtwitter());
              longitud = longitud + 1;
            }  
          }
        }
      }
    }
  }
  return longitud;
}
function tweetconrespectouser(iduser){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
        if (iduser == historial[i].dariduser()) {
            archivo.push(historial[i].daridtwitter());
            longitud = longitud + 1;
        }
  }
  return longitud;
}
function tweetmaslike(iduser){
  let archivo = {};
  var maslike = 0;
  var j = 0;
  for (var i = 0; i < size;i++){
        if (iduser == historial[i].dariduser()) {
          if(maslike < historial[i].darnlikes()){
            maslike = historial[i].darnlikes();
            j = i;
          }
        }
  }
  return maslike;
}
function tweetmasretweet(iduser){
  let archivo = {};
  var masretweet = 0;
  var j = 0;
  for (var i = 0; i < size;i++){
        if (iduser == historial[i].dariduser()) {
          if(masretweet < historial[i].darnretweet()){
            masretweet = historial[i].darnretweet();
            j = i;
          }
        }
  }
  return masretweet;
}
module.exports = {
  datos,
  historial,
  size,
  anhade,
  editar,
  borrardatos,
  buscartwitter,
  tweetfecha,
  tweetfechaprecisa,
  tweetconrespectouser,
  tweetmaslike,
  tweetmasretweet
}