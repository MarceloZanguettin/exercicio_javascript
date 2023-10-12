/*
function livro(nome, ano, autor) {
  const nomeMaiusculo = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + " por " + autor;
  const objeto = {
    nome: nomeMaiusculo,
    totalAnos,
    frase,
  };
  return objeto;
}
*/

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Aneis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase);
