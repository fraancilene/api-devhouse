import { Router } from 'express'; // importando apenas o router do express

const routes = new Router();

// criando as rotas
routes.get('/', (req, res) => {
    return res.json({ok: true})
});

export default routes;