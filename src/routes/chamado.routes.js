const chamadoRoute      = require('express-promise-router')();
const chamadoController =  require('../controllers/chamado.controller');

chamadoRoute.post('/criarChamado', chamadoController.criarChamado);
chamadoRoute.post('/criarHistorico', chamadoController.criarHistoricoChamado);

chamadoRoute.get('/buscarChamado/:id', chamadoController.buscarChamado);
chamadoRoute.get('/buscarHistorico/:id_chamado', chamadoController.buscarHistoricoChamado);

module.exports = chamadoRoute;