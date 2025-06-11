// Middleware global de tratamento de erros
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || "Erro interno do servidor";
    res.status(status).json({ message });
}

module.exports = errorHandler;