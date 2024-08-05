let button = document.getElementById("enviar")

button.onclick = async function() {
    let cpfmoto = document.getElementById("cpfmoto").value;
    let destino = document.getElementById("destino").value;
    let hdescarga = document.getElementById("hdescarga").value;
    document.getElementById("cpfmoto").value="";
    document.getElementById("destino").value="";
    document.getElementById("hdescarga").value="";

    let dados = {cpfmoto, destino, hdescarga}

    console.log(dados)

    const response = await fetch('http://localhost:3000/api/store/progra', {
        method: "POST",
        headers: {"Content-type": "application/json;chartset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Programação Enviada")
    } else {
        alert("Erro ao Enviar")
        console.log(content.sql);
    }
}
