var express = require('express');
var bodyParser = require('body-parser');

// Manipulacao do conteúdo executado pelo EXPRESS
var app = express();

// Analisa a requisicao e deixa disponivel na variavel 'req.body'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a porta que será utilizada pela aplicacao
app.set('port', 8084);
app.use(express.static('./'));

// Rotas - neste caso todas as rotas estão sendo resolvidas pela Web App
app.get('*', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

// Apresenta um log ao publicar o servico
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});