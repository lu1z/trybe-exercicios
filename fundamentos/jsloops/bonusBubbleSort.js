let ua = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let holder = 0;

for (let inter in ua) {
  for (let curr in ua) {
    if (curr > (ua.length - 2)) break;
    if (ua[curr] > ua[Number.parseInt(curr) + 1]) {
      holder = ua[curr];
      ua[curr] = ua[curr + 1];
      ua[curr + 1] = holder;
    }
  }
}
console.log(ua);

// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] > array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

// console.log(array);
