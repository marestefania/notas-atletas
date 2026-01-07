let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calculaNotasAtletas(objAtletas) {
  for (let i = 0; i < objAtletas.length; i++) {
    let atleta = objAtletas[i];
    let notas = atleta.notas.sort((a, b) => a-b);
    let notasValidas= notas.slice(1,4);

    let soma = notasValidas.reduce((total, atual) =>
        total + atual,
    0);

    let media =soma/notasValidas.length
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notas}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  }
}
calculaNotasAtletas(atletas);