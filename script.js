// Array de participantes
var participantes = [
    "Víctor",
    "Kathy",
    "Cami",
    "Papá",
    "Mamá",
    "Lis",
    "David",
    "Tita"
  ];
  
  // Función para mezclar aleatoriamente una lista
  function mezclar(lista) {
    var i, j, temp;
    for (i = lista.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = lista[i];
      lista[i] = lista[j];
      lista[j] = temp;
    }
  }
  
  // Función para realizar el sorteo
  function sortearAmigoSecreto(participantes) {
    var parejas = [...participantes];
    
    mezclar(parejas);
  
    // Verificar si hay parejas recíprocas o iguales
    while (!verificar(participantes, parejas)) {
      mezclar(parejas);
    }
  
    // Mostrar los resultados
    var resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";
  
    for (var i = 0; i < participantes.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerText = participantes[i] + " le regala a " + parejas[i];
      resultsList.appendChild(listItem);
    }
  }
  
  // Función para verificar si hay parejas recíprocas o iguales
  function verificar(lista1, lista2) {
    for (var i = 0; i < lista1.length; i++) {
      if (lista1[i] === lista2[i] || lista1.indexOf(lista2[i]) === lista2.indexOf(lista1[i])) {
        return false;
      }
    }
    return true;
  }
  
  // Manejador de evento del botón "Realizar Sorteo"
  document.getElementById("sortButton").addEventListener("click", function () {
    sortearAmigoSecreto(participantes);
  });
  
  // Mostrar los participantes en la lista
  var participantsList = document.getElementById("participantsList");
  participantes.forEach(function (participante) {
    var listItem = document.createElement("li");
    listItem.innerText = participante;
    participantsList.appendChild(listItem);
  });
