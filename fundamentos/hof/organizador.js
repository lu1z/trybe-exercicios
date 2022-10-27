const books = require("./biblioteca");

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => (nameBook = book.name.length < nameBook.length ? book.name : nameBook));
  return nameBook;
}
console.log(smallerName());

function getNamedBook26CharLength() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook26CharLength());

function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => b.releaseYear - a.releaseYear );
}
console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1900 && book.author.birthYear <= 2000);
}
console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1990);
}
console.log(someBookWasReleaseOnThe80s());

function authorUniqueBirthYear() {
  return !books.some((book, i, bks) => bks.some((bk, j) => bk.author.birthYear === book.author.birthYear && i !== j))
}
console.log(authorUniqueBirthYear());

function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}
console.log(formatedBookNames());

function nameAndAge() {
  return books.map((book) => ({age: book.releaseYear - book.author.birthYear, author: book.author.name})).sort((a, b) => a.age - b.age);
}
console.log(nameAndAge());

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}
console.log(fantasyOrScienceFiction());

const currentYear = new Date().getFullYear();
const bookAge = book => currentYear - book.releaseYear;
function oldBooksOrdered() {
  return books.filter((book) => bookAge(book) > 60).sort((a, b) => bookAge(b) - bookAge(a));
}
console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  return fantasyOrScienceFiction().map((book) => book.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  return books.filter((book) => bookAge(book) > 60).map((book) => book.name);
}
console.log(oldBooks());

function authorWith3DotsOnName() {
  return books.find((book) => book.author.name.match(/\..*\..*\./)).name;
}
console.log(authorWith3DotsOnName());

function reduceNames() {
  return books.reduce((acc, cur) => `${acc.concat(cur.author.name)}, `, '').replace(/, $/, '.');
}
console.log(reduceNames());

function averageAge() {
  return books.reduce((acc, cur) => {
    acc += cur.releaseYear - cur.author.birthYear;
    return acc;
  }, 0) / books.length;
}
console.log(averageAge());

function longestNamedBook() {
    return books.reduce((acc, cur) => acc.name.length > cur.name.length ? acc : cur);
}
console.log(longestNamedBook());
