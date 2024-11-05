// importando o express 
const express =require('express')

// importando o método 'uuidv4' da biblioteca 'uuid', para gerar um identificador para a app
const {v4:uuidv4 } = require('uuid')
// criando uma instância do aplicativo express
const app = express()

// configurando o servidor para aceitar requisições com dados JSON no corpo
app.use(express.json())
// Array onde armazenaremos temporariamente os projetos criados
const projects = []
// Middleware que registra as rotas e métodos das requisições no console 

function logRoutes(request,response, next){
    // extraindo o método e a URL da requisição
    const {method, url} = request 
    // formatando uma string com o método e a URL
    const route = `[${method.toUpperCase()}] ${url}`
    // exibindo a string no console
    console.log(route)
    // executando o próximo middleware ou rota
    return next()
}

// Habilitando o uso do middleware de log de rotas em todas as requisições 


// definindo uma rota para o endpoint 'projects'
// quando uma solicitação GET é feita '/projects', a função a seguir é executada
app.get('/projects', function(request,response){
    return response.json(projects)
}) 
// definindo uma rota para criar um novo projeto
// quando uma solicitação do tipo POST é feita para '/projects'.
app.post('/projects', function(request, response){
    // retornar uma resposta com uma lista de projetos, incluindo o novo projeto
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})
// // definindo uma rota para atualizar um projeto específico 
// o ':id' é um parâmetro de rota
app.put('/projects/:id', function(request, response){
    // retorna uma resposta JSON com a lista de projetos atualizada
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})
// definindo uma rota para deletar um projeto específico
app.delete('/projects/:id', function(request, response){
    // retorna uma resposta com a lista de projetos após a exclusão de um deles
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})
// iniciando o servidor na porta 9093 (para orientar no terminal que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(9093, () => {
    console.log('Servidor iniciado na porta 9093 🏆')
})



