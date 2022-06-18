"use strict";
/**
 * EXERCÍCIOS
 *
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 *
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 *
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
 * e retorne somente a lista de assuntos do objeto.
 *
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 *
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 *
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 *
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 *
 * 8 - Declare e popule um array com os objetos do exercício 7.
 *
 * 9 - Faça uma função que receba um argumento de array de Professor
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 *
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 *
 * 11 - Faça uma função que receba um argumento de array de Professores e
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 *
 */
// Exercicio 2
const p1 = {
    nome: "Luis Paulo",
    profissao: "Consultor cibersecurity",
    idade: 29,
    interesses: [
        "C#",
        "Python",
        "Typescript",
        "Angular",
        "HTML",
    ]
};
console.log("exemplo 2 ", p1);
// Exercicio 3
function listaInteresses(pessoa) {
    return pessoa.interesses;
}
console.log('ex 3 ', listaInteresses(p1));
// Exercicio 4
function listaInteressesType(pessoa) {
    return pessoa.interesses;
}
console.log("ex 4 ", listaInteressesType(p1));
// Exercicio 5
var cursos;
(function (cursos) {
    cursos["Angular"] = "Angular";
    cursos["Typescript"] = "Typescript";
    cursos["Git"] = "Git";
})(cursos || (cursos = {}));
// Exercicio 7
const Alan = {
    nome: "Alan",
    curso: [
        cursos.Angular,
        cursos.Typescript,
        cursos.Git,
    ]
};
const Nathan = {
    nome: "Nathan",
    curso: [
        cursos.Angular,
        cursos.Typescript,
    ]
};
// Exercicio 8
const professores = [Alan, Nathan];
console.log("ex 8 ", professores);
// Exercicio 9
const professorNomes = (professor) => {
    return professores.map(professor => professor.nome);
};
console.log("ex 9 ", professorNomes(professores));
// Exercicio 10
const professorCurso = (professor) => {
    const cursos = [];
    professores.forEach(function (professor) {
        professor.curso.forEach(function (curso) {
            cursos.push(curso);
        });
    });
    return cursos;
};
console.log("ex 10 ", professorCurso(professores));
// Exercicio 11
const professorTypeScript = (professor) => {
    return professores.find(professor => professor.curso.includes(cursos.Typescript));
};
console.log("ex 11. ", professorTypeScript(professores));
