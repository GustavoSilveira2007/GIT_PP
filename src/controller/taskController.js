const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.name,
        request.body.cpf,
        request.body.funcao,
        request.body.senha
    );

console.log("teste", params)
    const query = "INSERT INTO tasks(name, cpf, funcao, senha) VALUES(?,?,?,?)";

    connection.query(query, params, (err, results) => {
        console.log("err", err)
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Cadastro Concluído",
                    data: results
                })
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Erro",
                        sql: err
                    })
        }
    })
}

module.exports = {
    storeTask
}

