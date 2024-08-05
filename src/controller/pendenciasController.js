const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storePendencia(request, response) {
    const params = Array(
        request.body.cpfmoto,
        request.body.descricao,
        request.body.dlimite
    )

    const query = "INSERT INTO pendencias(cpfmoto, descricao, dlimite) VALUES(?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql:err,
            })
        }
    })
}

async function getPendencia(request, response) {


    const query = `SELECT * FROM pendencias where cpfmoto = ${request.params.cpf} order by id desc`; 

    connection.query(query, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Pendência Enviada",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao Enviar",
                sql: err
            })
        }
    })
}

module.exports = {
    storePendencia,
    getPendencia
}