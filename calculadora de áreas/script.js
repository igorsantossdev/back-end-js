function calculateSquareArea() {
    var side = parseFloat(document.getElementById("square").value);
    var area = side * side;
    document.getElementById("squareResult").innerHTML = "<p>Área do quadrado: " + area.toFixed(2) + "</p>";
  }
  
  function calculateCircleArea() {
    var diameter = parseFloat(document.getElementById("circle").value);
    var radius = diameter / 2;
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById("circleResult").innerHTML = "<p>Área da circunferência: " + area.toFixed(2) + "</p>";
  }
  
  function calculateTriangleArea() {
    var base = parseFloat(document.getElementById("triangle").value);
    var height = Math.sqrt(3) / 2 * base; // Altura do triângulo equilátero
    var area = (base * height) / 2;
    document.getElementById("triangleResult").innerHTML = "<p>Área do triângulo equilátero: " + area.toFixed(2) + "</p>";
  }
  