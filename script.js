// Array de participantes
const participantes = [
    "Víctor",
    "Kathy",
    "Cami",
    "Papá",
    "Mamá",
    "Lis",
    "David",
    "Tita"
  ];
  
  // Función para realizar el sorteo
  function sortearAmigoSecreto(participantes) {
    const participantesCopia = participantes.slice(); // Copiar el array de participantes
    const numParticipantes = participantesCopia.length;
  
    // Comprobar si hay un número impar de participantes
    if (numParticipantes % 2 !== 0) {
      console.log("El número de participantes debe ser par.");
      return;
    }
  
    // Realizar el sorteo
    const resultados = [];
    while (participantesCopia.length > 0) {
      const indice1 = getRandomIndex(participantesCopia.length); // Obtener un índice aleatorio
      const participante1 = participantesCopia.slice(indice1, indice1 + 1)[0]; // Usar slice() en lugar de shift()
      participantesCopia.splice(indice1, 1); // Eliminar el elemento del array copia
      const indice2 = getRandomIndex(participantesCopia.length); // Obtener otro índice aleatorio
      const participante2 = participantesCopia.splice(indice2, 1)[0]; // Eliminar el elemento del array copia
      resultados.push({ participante1, participante2 });
    }
  
    // Mostrar los resultados
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";
  
    resultados.forEach((resultado) => {
      const listItem = document.createElement("li");
      listItem.innerText = `${resultado.participante1} => ${resultado.participante2}`;
      resultsList.appendChild(listItem);
    });
  }
  
  // Obtener un índice aleatorio
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Manejador de evento del botón "Realizar Sorteo"
  document.getElementById("sortButton").addEventListener("click", function() {
    sortearAmigoSecreto(participantes);
  });
  
  // Mostrar los participantes en la lista
  const participantsList = document.getElementById("participantsList");
  participantes.forEach((participante) => {
    const listItem = document.createElement("li");
    listItem.innerText = participante;
    participantsList.appendChild(listItem);
  });