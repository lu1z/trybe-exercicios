let n = 6;
//square
let line = "";
// for (let j = 0; j < n; j++) line += "*";
// for(let i = 0; i < n; i++) {
//     console.log(line);
// }
// //left triangle
// line = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) line += "*";
//     console.log(line);
//     line = "";
// }
// //right triangle
// line = "";
// for (let i = 1; i <= n; i++) {
//     //for (let j = 0; j <= i; j++) line += "*";
//     //console.log(line.padStart(n, " "));
//     for (let j = n; j > 0; j--) {
//         if(i >= j)
//             line += "*";
//         else
//             line += " ";
//     }
//     console.log(line);
//     line = "";
// }
//piramide
// line = "";
// for (let i = n; i > 0; i--) {
//   for (let j = 1; j <= n; j++) {
//     if (j >= i && j <= n - (i - 1)) line += "*";
//     else line += " ";
//   }
//   console.log(line);
//   line = "";
// }
//piramide da disgraça
line = "";
for (let i = n; i > 0; i--) {
  for (let j = 1; j <= n; j++)
    if (j >= i && j <= n - (i - 1))
      if (j >= i + 1 && j <= n - i)
        if (i === 1) line += "*";
        else line += " ";
      else line += "*";
    else line += " ";
  console.log(line);
  line = "";
}
