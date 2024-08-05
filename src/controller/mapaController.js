const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storeMapa(request, response) {
    const params = Array(
        request.body.nome,
        request.body.latitude,
        request.body.longitude
    )

    console.log(params)

    const query = "INSERT INTO mapa(nome, lat, lng) VALUES(?, ?, ?)";

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

async function getMapa(request, response) {


    const query = `SELECT * FROM mapa`

    connection.query(query, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Coordenadas Enviada",
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
    storeMapa,
    getMapa
}