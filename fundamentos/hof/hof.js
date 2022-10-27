const criaPessoaContratada = (nome) => ({
  nomeCompleto: nome,
  email: `${nome.replaceAll(" ", "_")}@trybe.com`,
});

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
console.log(newEmployees(criaPessoaContratada));

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
function flatten() {
  return arrays.reduce((acc, cur) => {
    cur.forEach((el) => acc.push(el));
    return acc;
  }, []);
}
console.log(flatten());

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];
function containsA() {
  return names.reduce((acc, cur) => acc + cur.match(/a|A/gi).length, 0);
}
console.log(containsA());

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
function studentAverage() {
  return grades.map((grade, idx) => ({
    name: students[idx],
    average: grade.reduce((acc, cur) => acc + cur) / grade.length,
  }));
}
console.log(studentAverage());
