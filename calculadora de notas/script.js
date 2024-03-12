function inserirNota() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
  
    var media = calcularMedia(nota1, nota2, nota3);
    var situacao = calcularSituacao(media);
  
    var tableBody = document.getElementById("tbody");
    var newRow = tableBody.insertRow();
    newRow.insertCell().appendChild(document.createTextNode(nome));
    newRow.insertCell().appendChild(document.createTextNode(nota1));
    newRow.insertCell().appendChild(document.createTextNode(nota2));
    newRow.insertCell().appendChild(document.createTextNode(nota3));
    newRow.insertCell().appendChild(document.createTextNode(media.toFixed(2)));
    newRow.insertCell().appendChild(document.createTextNode(situacao));
  }
  
  function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
  }
  
  function calcularSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
  }
  