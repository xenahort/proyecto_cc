var request = require('supertest'),
	app = require('./index.js');
var {datos,historial,size,anhade,editar,BorrarDatos,BuscarTwitter,TweetFecha,TweetFechaPrecisa,TweetConRespectoUser,TweetMasLike,TweetMasRetweet,TweetsAntesAnho,TweetsDespuesAnho,EtiquetasPositivas,EtiquetasNegativas}=require("./comentario.js");
assert = require('assert');

describe( "Test de la API rest", function() {
  it('Test para devolver OK', function (done) {
  request(app)
    .get('/')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    done();
  });

  it('Test de get', function(done){
    request(app)
      .get('/datos')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      done();
  });

  it('Test de post', function(done){
    request(app)
      .post('/datos/78/83/0/5/12/2018/7/7/12/12')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .expect(function(err,result){
      			assert.equal(result.body.size, 1);
      });
      done();
  });

  it('Test de put', function(done){
    request(app)
      .put('/datos/1/78/83/0/5/12/2018/7/7/12/12')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .expect(function(err,result){
      			assert.equal(result.body.size, 1);
      });
      done();
  });

  it('Test de delete', function(done){
    request(app)
      .delete('/datos/1')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .expect(function(err,result){
      			assert.equal(result.body.size, 0);
      });
      done();
  });
});

/*
describe( "Test de cada una de las funciones", function() {
  it('Anhade comentario', function(done){
      var prueba = anhade(78,83,0,5,12,2018,7,7,12,12);
      assert.equal(prueba,1);
      done();
  });

  it('Edita comentario', function(done){
      var i = 0;
      assert(i<=size);
      var prueba = editar(i,78,83,0,5,12,2018,7,7,12,12);
      assert.equal(prueba,1);
      done();
  });

  it('Borrar comentario', function(done){
      var i = 0;
      assert(i<=size);
      BorrarDatos(i);
      assert.equal(size,0);
      done();
  });
  it('buscar en twitter con una id ',function(done){
  	var idt = 1110;
	var resultado = BuscarTwitter(idt);
    assert.equal(resultado,0);
    done();
  });
  it('buscar el conjunto de tweets de una fecha',function(done){
  	var idt = 1110; 
  	var testea = TweetFecha(idt,idt,idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el conjunto de tweets de una fecha precisa',function(done){
  	var idt = 1110; 
  	var testea = TweetFechaPrecisa(idt,idt,idt,idt,idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el conjunto de tweets con respecto a un id de usuario',function(done){
  	var idt = 1110; 
  	var testea = TweetConRespectoUser(idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el tweets con mas likes de un usuario',function(done){
  	var idt = 1110; 
  	var testea = TweetMasLike(idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el  tweets con mas retweets de un usuario',function(done){
  	var idt = 1110; 
  	var testea = TweetMasRetweet(idt);
    assert.equal(testea,0);
    done();
  });
  it('Mostrar los comentarios antes del anho',function(done){
    var idt = 1110; 
    var testea = TweetsAntesAnho(idt);
    assert.equal(testea,0);
    done();
  });
  it('Mostrar los comentarios despues del anho',function(done){
    var idt = 1110; 
    var testea = TweetsDespuesAnho(idt);
    assert.equal(testea,0);
    done();
  });
  it('Mostrar los comentarios con etiquetas negativas',function(done){
    var testea = EtiquetasNegativas();
    assert.equal(testea,0);
    done();
  });
  it('Mostrar los comentarios con etiquetas positivas',function(done){
    var testea = EtiquetasPositivas();
    assert.equal(testea,0);
    done();
  });
});*/