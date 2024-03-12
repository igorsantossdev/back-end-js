function submitForm() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var birthYear = new Date().getFullYear() - age;
    var message = "Olá, " + name + "! Você nasceu no ano " + birthYear + ".";
    alert(message);

    var attempts = 3;
    var randomNumberList = generateRandomNumbers(20);

    while (attempts > 0) {
      var guess = parseInt(prompt("Tente adivinhar um número entre 1 e 100:"));

      if (randomNumberList.includes(guess)) {
        alert("Parabéns! Você acertou!");
        break;
      } else {
        alert("Fim de jogo!");
        attempts--;
      }
    }
  }

  function generateRandomNumbers(count) {
    var numbers = [];
    for (var i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return numbers;
  }