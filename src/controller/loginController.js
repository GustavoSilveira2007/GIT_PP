const connection = require('../config/db');
const dotenv = require('dotenv').config();

let account = null;

async function storeLogin(request, response) {
  
  const params = [
    request.body.cpf
  ];
  console.log(params)
  
  const query = "SELECT * FROM tasks WHERE cpf = ?;";

  connection.query(query, params, (err, results) => {
    if (err) {
      response
        .status(500)
        .json({
          success: false,
          message: 'Erro no servidor',
          data: err
        });
      return;
    }

    if (results.length > 0) {
      account = results[0];
      let resultPassword = account.senha;
      let formPassword = request.body.senha;

      if (resultPassword === formPassword) {
        response
          .status(200)
          .json({
            success: true,
            message: 'Bem Vindo!',
            data: account
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'CPF ou Senha inválidos'
          });
      }      
    } else {
      response
        .status(400)
        .json({
          success: false,
          message: 'Email inválido'
        });
    }
  });
}

module.exports = {
  storeLogin
}