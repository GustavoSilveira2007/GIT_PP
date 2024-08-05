let button = document.getElementById("enviar")

button.onclick = async function() {
    let cpfmoto = document.getElementById("cpfmoto").value;
    let descricao = document.getElementById("descricao").value;
    let dlimite = document.getElementById("dlimite").value;
    document.getElementById("cpfmoto").value="";
    document.getElementById("descricao").value="";
    document.getElementById("dlimite").value="";

    let dados = {cpfmoto, descricao, dlimite}

    console.log(dados)

    const response = await fetch('http://localhost:3000/api/store/pendencia', {
        method: "POST",
        headers: {"Content-type": "application/json;chartset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Pendência Enviada")
    } else {
        alert("Erro ao Enviar")
        console.log(content.sql);
    }
}
