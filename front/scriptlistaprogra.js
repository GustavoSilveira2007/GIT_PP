document.addEventListener('DOMContentLoaded', async () => {

     var getcpfmoto = JSON.parse(localStorage.getItem("@account_logged"));
     console.log(getcpfmoto.cpf);
     const response = await fetch('http://localhost:3000/api/get/programacao/'+getcpfmoto.cpf); 
     const result = await response.json();

   // console.log(result);

   if(result.success) {
        const programacaoList = document.querySelector('.progra-list');
        result.data.forEach(progra => {
            const card = document.createElement('div');
            card.className = 'progra-card';

            const infoDiv = document.createElement('div');
            infoDiv.className = 'info';

            const cpfmoto = document.createElement('p');
            cpfmoto.textContent = "CPF do Motorista: "+progra.cpfmoto;

            const destino = document.createElement('p');
            destino.textContent = "Destino: "+progra.destino;

            const hdescarga = document.createElement('p');
            hdescarga.textContent = "Horário da Descarga: "+progra.hdescarga;

          const barra = document.createElement('hr');
          barra.textContent = progra.barra;

            infoDiv.appendChild(cpfmoto);
            infoDiv.appendChild(destino);
            infoDiv.appendChild(hdescarga);
            infoDiv.appendChild(barra);

            card.appendChild(infoDiv);


            programacaoList.appendChild(card)
        })
   } else {
        console.log("Erro", result.sql);
   }
});