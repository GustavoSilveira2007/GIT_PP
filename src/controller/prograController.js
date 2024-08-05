const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storeProgra(request, response) {
    const params = Array(
        request.body.cpfmoto,
        request.body.destino,
        request.body.hdescarga
    )

    const query = "INSERT INTO programacao(cpfmoto, destino, hdescarga) VALUES(?, ?, ?)";

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

async function getProgra(request, response) {


    const query = `SELECT * FROM programacao where cpfmoto = ${request.params.cpf} order by id desc`;

    connection.query(query, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Programação Enviada",
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
    storeProgra,
    getProgra
}