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
  SustIdTwitter: function(idtwitter) {
    this.idtwitter=idtwitter;
  },
  SustIdUser: function(iduser) {
    this.iduser=iduser;
  },
  SusLabel: function(etiqueta) {
    this.etiqueta=etiqueta;
  },
  SusDay: function(dia){
    this.dia=dia;
  },
  SusMonth: function(mes){
    this.mes=mes;
  },
  SusYear: function(anho){
    this.anho=anho;
  },
  SusHora: function(hora){
    this.hora=hora;
  },
  SusMinuto: function(min){
    this.min=min;
  },
  SusLike: function(nlikes){
    this.nlikes=nlikes;
  },
  SusRetweet: function(nretweet){
    this.nretweet=nretweet;
  },
  DarIdTwitter: function(){
    return idtwitter;
  },
  DarIdUser: function(){
    return iduser;
  },
  DarLabel: function(){
    return etiqueta;
  },
  DarDay: function() {
    return dia;
  },
  DarMonth: function(){
    return mes;
  },
  DarYear: function(){
    return anho;
  },
  DarHora: function(){
    return hora;
  },
  DarMin: function(){
    return min;
  },
  DarNLikes: function(){
    return nlikes;
  },
  DarNRetweet: function(){
    return nretweet;
  }
}

historial=[];
size=0;

function anhade(idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){

  datos.SustIdTwitter(idtwitter);
  datos.SustIdUser(iduser);
  datos.SusLabel(etiqueta);
  datos.SusDay(dia);
  datos.SusMonth(mes);
  datos.SusYear(anho);
  datos.SusHora(hora);
  datos.SusMinuto(min);
  datos.SusLike(nlikes);
  datos.SusRetweet(nretweet);
  historial.push(datos);
  size=size+1;

  return size;
}

function editar(i,idtwitter,iduser,etiqueta,dia,mes,anho,hora,min,nlikes,nretweet){

  historial[i].SustIdTwitter(idtwitter);
  historial[i].SustIdUser(iduser);
  historial[i].SusLabel(etiqueta);
  historial[i].SusDay(dia);
  historial[i].SusMonth(mes);
  historial[i].SusYear(anho);
  historial[i].SusHora(hora);
  historial[i].SusMinuto(min);
  historial[i].SusLike(nlikes);
  historial[i].SusRetweet(nretweet);

  return size;
}

function BorrarDatos(i){
  size=size-1;
  salida=historial.splice(i,1);
  return salida;
}

function BuscarTwitter(idtwitte){
  var verificar = 0;
  for (var i = 0; i < size;i++) {
    if(verificar <= 0){
      if(idtwitte == historial[i].DarIdTwitter()){
      verificar=1;
      }
    }
  }
  return verificar;
}

function TweetFecha(dia,mes,anho){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(dia == historial[i].DarDay()){
      if (mes == historial[i].DarMonth()) {
        if(anho == historial[i].DarYear()){
          archivo.push(historial[i].DarIdTwitter());
          longitud = longitud + 1;
        }
      }
    }
  }
  return longitud;
}
function TweetFechaPrecisa(dia,mes,anho,hora,min){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(dia == historial[i].DarDay()){
      if (mes == historial[i].DarMonth()) {
        if(anho == historial[i].DarYear()){
          if(hora == historial[i].DarHora()){
            if(min == historial[i].DarMin()){
              archivo.push(historial[i].DarIdTwitter());
              longitud = longitud + 1;
            }  
          }
        }
      }
    }
  }
  return longitud;
}
function TweetConRespectoUser(iduser){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
        if (iduser == historial[i].DarIdUser()) {
            archivo.push(historial[i].DarIdTwitter());
            longitud = longitud + 1;
        }
  }
  return longitud;
}
function TweetMasLike(iduser){
  let archivo = {};
  var maslike = 0;
  var j = 0;
  for (var i = 0; i < size;i++){
        if (iduser == historial[i].DarIdUser()) {
          if(maslike < historial[i].DarNLikes()){
            maslike = historial[i].DarNLikes();
            j = i;
          }
        }
  }
  return maslike;
}
function TweetMasRetweet(iduser){
  let archivo = {};
  var masretweet = 0;
  var j = 0;
  for (var i = 0; i < size;i++){
        if (iduser == historial[i].DarIdUser()) {
          if(masretweet < historial[i].DarNRetweet()){
            masretweet = historial[i].DarNRetweet();
            j = i;
          }
        }
  }
  return masretweet;
}
function TweetsAntesAnho(anho){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(anho < historial[i].DarYear()){
          archivo.push(historial[i].DarIdTwitter());
          longitud = longitud + 1;
    }
  }
  
  return longitud;
}
function TweetsDespuesAnho(anho){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(anho > historial[i].DarYear()){
      archivo.push(historial[i].DarIdTwitter());
      longitud = longitud + 1;         
    }
  }
  
  return longitud;
}
function EtiquetasPositivas(){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(historial.DarLabel() == 1){
      archivo.push(historial[i].DarIdTwitter());
      longitud = longitud + 1;         
    }
  } 
  return longitud;
}
function EtiquetasNegativas(){
  let archivo = {};
  var longitud = 0;
  for (var i = 0; i < size;i++){
    if(historial.DarLabel() == 0){
      archivo.push(historial[i].DarIdTwitter());
      longitud = longitud + 1;         
    }
  }
  
  return longitud;
}
module.exports = {
  datos,
  historial,
  size,
  anhade,
  editar,
  BorrarDatos,
  BuscarTwitter,
  TweetFecha,
  TweetFechaPrecisa,
  TweetConRespectoUser,
  TweetMasLike,
  TweetMasRetweet,
  TweetsAntesAnho,
  TweetsDespuesAnho,
  EtiquetasPositivas,
  EtiquetasNegativas
}
