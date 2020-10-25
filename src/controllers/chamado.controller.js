const Chamado = require('../database/models/chamado');
const HistoricoChamado = require('../database/models/historico_chamado');

/**Como está sendo utilizada promises, não precisa do async */

exports.criarChamado = (req, res) => {
    
    Chamado.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Falha ao executar' + err
            })
        });
}

exports.criarHistoricoChamado = (req, res) => {
    HistoricoChamado.create(req.body)
        .then(data => {
            res.status(200).send(data)
        })
        .catch( err => {
            res.status(500).send({
                message: 'Falha ao criar historico para o chamado: '+ req.body.id_chamado + err
            })
        })
}

exports.listarChamados = async (req, res) => {

}

exports.buscarChamado = (req, res) => {
    const chamadoId = parseInt(req.params.id);

    Chamado.findAll({ where: chamadoId })
        .then( data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

exports.buscarHistoricoChamado = (req, res) => {
    const chamadoId = parseInt(req.params.id_chamado);

    HistoricoChamado.findAll({ where: {
        id_chamado: chamadoId
    }})
    .then( data => {
        res.send(data);
    });
}