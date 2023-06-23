const { Router } = require('express'); // importando apenas o router do express

const routes = new Router();

// criando as rotas
routes.get('/', (req, res) => {
    return res.json({ok: true})
});

module.exports = routes;