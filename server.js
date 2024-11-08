// Importa o módulo express, que é uma biblioteca para criar servidores web.
const express = require('express');

// Cria uma aplicação express, que é o nosso servidor.
const app = express();

// Define a porta em que o servidor vai rodar. Aqui estamos usando a porta 3000.
const PORT = 3000;

// Diz ao express para servir arquivos estáticos da pasta "public".
// Isso significa que qualquer arquivo na pasta "public" será acessível no navegador.
app.use(express.static('public'));

// Inicia o servidor, dizendo para escutar na porta especificada.
// Quando o servidor estiver rodando, ele executa a função de callback e imprime a mensagem.
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
