var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");

// Manipulacao do conteúdo executado pelo EXPRESS
var app = express();

// Analisa a requisicao e deixa disponivel na variavel 'req.body'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Define a porta que será utilizada pela aplicacao
app.set('port', 8083);
app.use(express.static('./'));

// Rotas - neste caso todas as rotas estão sendo resolvidas pela Web App
app.get('*', function (req, res) {
  let token = req.cookies['service-login.token'];
  let url = req.cookies['service-login.url'];
  console.log(req.cookies);

  if (!url || !url.length)
    url = 'http://iuri.localhost/page-1';

  if (token && token.length)
    res.status(200).send(url);
  else
    res.status(403).send('http://iuri.localhost/');

  res.end();
});

// Apresenta um log ao publicar o servico
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});