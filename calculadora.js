var nota1 = parseFloat(prompt("Digite a primeira nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var nota3 = parseFloat(prompt("Digite a terceira nota"));

if (
  isNaN(nota1) ||
  isNaN(nota2) ||
  isNaN(nota3) ||
  nota1 < 0 ||
  nota1 > 10 ||
  nota2 < 0 ||
  nota2 > 10 ||
  nota3 < 0 ||
  nota3 > 10
) {
  alert("Este valor não é aceito, digite um número de 0 a 10");
  console.log("Este valor não é aceito, digite um número de 0 a 10");
} else {
  var media = (nota1 + nota2 + nota3) / 3;
  alert("A média do aluno é: " + media);
  console.log("A média do aluno é: " + media);
}
