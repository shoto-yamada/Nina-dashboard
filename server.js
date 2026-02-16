// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota de diretrizes
app.get('/guidelines', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guidelines.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`💛 Dashboard da Nina rodando em http://localhost:${PORT}`);
});