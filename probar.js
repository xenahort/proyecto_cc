var request = require('supertest'),
	app = require('./index.js');
var {datos,historial,size,anhade,editar,borrardatos,buscartwitter,tweetfecha,tweetfechaprecisa,tweetconrespectouser,tweetmaslike,tweetmasretweet}=require("./comentario.js");
assert = require('assert');

describe( "Test de la API rest", function() {
  it('main get, respond OK', function (done) {
  request(app)
    .get('/')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    done();
  });

  it('Get to /datos', function(done){
    request(app)
      .get('/datos')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      done();
  });

  it('Post to /datos', function(done){
    request(app)
      .post('/datos/78/83/0/5/12/2018/7/7/12/12')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .expect(function(err,result){
      			assert.equal(result.body.size, 1);
      });
      done();
  });

  it('Put to /datos', function(done){
    request(app)
      .put('/datos/1/78/83/0/5/12/2018/7/7/12/12')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .expect(function(err,result){
      			assert.equal(result.body.size, 1);
      });
      done();
  });

  it('Delete to /datos', function(done){
    request(app)
      .delete('/datos/0')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .expect(function(err,result){
      			assert.equal(result.body.size, 0);
      });
      done();
  });
});


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
      borrardatos(i);
      assert.equal(size,0);
      done();
  });
  it('buscar en twitter con una id ',function(done){
  	var idt = 1110;
	var resultado = buscartwitter(idt);
    assert.equal(resultado,0);
    done();
  });
  it('buscar el conjunto de tweets de una fecha',function(done){
  	var idt = 1110; 
  	var testea = tweetfecha(idt,idt,idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el conjunto de tweets de una fecha precisa',function(done){
  	var idt = 1110; 
  	var testea = tweetfechaprecisa(idt,idt,idt,idt,idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el conjunto de tweets con respecto a un id de usuario',function(done){
  	var idt = 1110; 
  	var testea = tweetconrespectouser(idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el tweets con mas likes de un usuario',function(done){
  	var idt = 1110; 
  	var testea = tweetmaslike(idt);
    assert.equal(testea,0);
    done();
  });
  it('buscar el  tweets con mas retweets de un usuario',function(done){
  	var idt = 1110; 
  	var testea = tweetmasretweet(idt);
    assert.equal(testea,0);
    done();
  });
});