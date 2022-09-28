let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
info["recorrente"] = 'sim';

console.log(`Bem vinda, ${info.recorrente}`);

for (const key in info) {
    if (Object.hasOwnProperty.call(info, key)) {
        const element = info[key];
        console.log(key);
        console.log(element);
    }
}


let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama \"${leitor.livrosFavoritos[0].titulo}\"`);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(`${leitor.nome} ${leitor.sobrenome} tem ${leitor.livrosFavoritos.length} livros favoritos um deles é \"${leitor.livrosFavoritos[Math.floor(Math.random() * leitor.livrosFavoritos.length)].titulo}\"`);


