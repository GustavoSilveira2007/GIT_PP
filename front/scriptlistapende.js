document.addEventListener('DOMContentLoaded', async () => {

     var getcpfmoto = JSON.parse(localStorage.getItem("@account_logged"));
     console.log(getcpfmoto.cpf);
     const response = await fetch('http://localhost:3000/api/get/pendencia/'+getcpfmoto.cpf);
     const result = await response.json();

   // console.log(result);

   if(result.success) {
        const pendenciasList = document.querySelector('.pendencias-list');
        console.log(pendenciasList)
        result.data.forEach(pendencia => {
            const card = document.createElement('div');
            card.className = 'pendencia-card';

            const infoDiv = document.createElement('div');
            infoDiv.className = 'info';

            const cpfmoto = document.createElement('p');
            cpfmoto.textContent = "CPF do Motorista: "+pendencia.cpfmoto;

            const descricao = document.createElement('p');
            descricao.textContent = "Descrição: "+pendencia.descricao;

            const dlimite = document.createElement('p');
            dlimite.textContent = "Data Limite: "+pendencia.dlimite;

          const barra = document.createElement('hr');
          barra.textContent = pendencia.barra;

            infoDiv.appendChild(cpfmoto);
            infoDiv.appendChild(descricao);
            infoDiv.appendChild(dlimite);
            infoDiv.appendChild(barra);

            card.appendChild(infoDiv);


            pendenciasList.appendChild(card)
        })
   } else {
        console.log("Erro", result.sql);
   }
});