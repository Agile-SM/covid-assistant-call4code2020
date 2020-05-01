/**
 * COVID-19 Q&A (Preguntas y Respuestas Covid-19)
 */
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
app.set('appName', 'COVID19');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/HTML'));
http.createServer(app).listen(app.get('port'),function(req, res) {console.log(app.get('appName')+' En el Puerto: ' + app.get('port'));});



	
