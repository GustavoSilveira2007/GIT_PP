import { setAccount } from './account.js';
  const button = document.querySelector("#aentrar");

  button.onclick = async function(event) {
    event.preventDefault();

    let cpf = document.querySelector("#cpf").value;
    let senha = document.querySelector("#senha").value;

    let data = { cpf, senha };

    const response = await fetch('http://localhost:3000/api/store/login', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      setAccount(content.data);
      localStorage.setItem('@account_logged', JSON.stringify(content.data));
      alert(content.message);

      if(content.data.funcao == "Gestor") {
      window.location.href="home.html"
    } else {
      window.location.href="homecliente.html"
    }
    } else {
      alert(content.message);
    }
  };