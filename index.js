// Importa o módulo 'express', que é um framework para construir aplicações web e APIs em Node.js.
const express = require('express');

// Cria uma instância do aplicativo Express, permitindo que você configure e manipule rotas e responda a solicitações.
const app = express();

// Define uma rota para o endpoint raiz ('/'). 
// Quando uma solicitação GET é feita para '/', essa função é executada.
app.get('/', function(request, response) {
    // Retorna uma resposta no formato JSON com uma mensagem de boas-vindas.
    return response.json({
        message: 'Olá Dev! Bem vindo ao curso!'
    });
});

// Define uma rota para o endpoint '/projects'.
// Quando uma solicitação GET é feita para '/projects', essa função é executada.
app.get('/projects', function(request, response) {
    // Retorna uma resposta JSON com uma lista de projetos.
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

// Define uma rota para criar um novo projeto.
// Quando uma solicitação POST é feita para '/projects', essa função é executada.
app.post('/projects', function(request, response) {
    // Retorna uma resposta JSON com uma lista de projetos, incluindo o novo projeto.
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// Define uma rota para atualizar um projeto específico.
// O ':id' é um parâmetro de rota, que será substituído pelo ID do projeto na URL.
app.put('/projects/:id', function(request, response) {
    // Retorna uma resposta JSON com a lista de projetos atualizada.
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// Define uma rota para deletar um projeto específico.
// O ':id' permite especificar qual projeto deletar pelo ID.
app.delete('/projects/:id', function(request, response) {
    // Retorna uma resposta JSON com a lista de projetos após a exclusão de um deles.
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
// O servidor ficará "ouvindo" solicitações HTTP nessa porta.
app.listen(3455, () => {
    console.log('Server started on port 3000! 🏆');
});
