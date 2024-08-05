let button = document.getElementById('handleSubmit');

const password = document.querySelector("#senha");
const confirmPassword = document.querySelector("#confirmar");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("As senhas não coincidem");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


document.addEventListener('DOMContentLoaded', () => {
    button.onclick = async function(event) {
        event.preventDefault()

        validatePassword();

        if (password.value !== confirmPassword.value) {
          alert("As senhas não coincidem!");
          return;
        }

        let name    = document.getElementById("name").value;
        let cpf     = document.getElementById("cpf").value;
        let funcao   = document.getElementById("funcao").value;
        let senha   = document.getElementById("senha").value;
        let data    =  {
            name,
            cpf,
            funcao,
            senha
        }

        const response = await fetch('http://localhost:3000/api/store/task', {
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(data)
        });

        let content = await response.json();

        if(content.success) {
            alert("Cadastro Concluído")
            window.location.href = 'login.html'            
        } else {
            alert('Erro');
        }
        }
})
