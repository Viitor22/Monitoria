const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Permite que o servidor aceite requisições de outros domínios
app.use(express.json()); //Indica que o servidor vai receber JSON
app.use(express.static('public'));
require("./db/conn.js");


const port = 3000;

const userRoutes = require('./routes/UserRoutes');
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});