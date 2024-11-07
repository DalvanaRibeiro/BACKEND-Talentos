// Importa o módulo http do Node.js, que permite criar o servidor
const http = require('http');

// Define a porta onde o servidor vai escutar as requisições
const PORT = 3000;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta para JSON com status 200 (OK)
  res.setHeader('Content-Type', 'application/json');

  // Verifica o método e a URL da requisição
  if (req.method === 'GET' && req.url === '/api/mensagem') {
    // Responde com uma mensagem simples em formato JSON
    res.statusCode = 200;
    res.end(JSON.stringify({ mensagem: 'Olá, esta é uma resposta GET!' }));
  } 
  else if (req.method === 'POST' && req.url === '/api/mensagem') {
    // Inicializa uma variável para armazenar os dados do POST
    let body = '';

    // Recebe os dados da requisição em partes
    req.on('data', (chunk) => {
      body += chunk.toString(); // Adiciona cada parte dos dados ao body
    });

    // Quando todos os dados são recebidos
    req.on('end', () => {
      // Converte o body de JSON para um objeto JavaScript
      const data = JSON.parse(body);
      
      // Responde com uma mensagem que inclui o conteúdo do POST
      res.statusCode = 201; // Status 201 indica que algo foi criado
      res.end(JSON.stringify({ mensagem: 'Dados recebidos via POST', dados: data }));
    });
  } 
  else {
    // Se a URL ou método não são reconhecidos, retorna 404
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

// Inicia o servidor e escuta na porta definida
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
