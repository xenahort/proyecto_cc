var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Jódar y jaen');
});
app.put('/:persona1/:persona2',function(req, res){
	res.send(req.params.persona1+" y "+req.params.persona2+" se van de vacaciones juntos");
});
var port=process.env.PORT || 3000
if(!module.parent){
  app.listen(port);
  console.log('Server running at http://127.0.0.1:' + port + '/');
}

module.exports = app