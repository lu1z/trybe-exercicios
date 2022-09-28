/**
 * @param  {string} word
 */
function isPalindromo(word) {
  return word === word.split("").reverse().join("");
}
console.log(isPalindromo("arara"));

/**
 * @param  {Array} array
 */
function indexOfBiggestValue(array) {
  let biggestValue = array[0];
  let biggestValueIndex = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > biggestValue) {
      biggestValue = element;
      biggestValueIndex = index;
    }
  }
  return biggestValueIndex;
}
console.log(indexOfBiggestValue([2, 3, 6, 7, 10, 1]));
