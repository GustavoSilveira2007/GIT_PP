let button = document.getElementById("enviar")

button.onclick = async function() {
    let nome = document.getElementById("markername").value;
    let latitude = document.getElementById("markerlat").value;
    let longitude = document.getElementById("markerlng").value;
    document.getElementById("markername").value="";
    document.getElementById("markerlat").value="";
    document.getElementById("markerlng").value="";

    let dados = {nome, latitude, longitude}


    console.log(dados)

    const response = await fetch('http://localhost:3000/api/store/mapa', {
        method: "POST",
        headers: {"Content-type": "application/json;chartset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Coordenadas Enviada")
    } else {
        alert("Erro ao Enviar")
        console.log(content.sql);
    }
}
