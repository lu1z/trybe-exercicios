const a = 3;
const b = 7;
const c = 10;
let chessPiece = "QUEEN";
let porcentagem = 60;
let bruto = 3000;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) console.log("a>b");
else console.log("a<b");

if (a > b && a > c) console.log("a is bigger");
else if (b > a && b > c) console.log("b is bigger");
else console.log("c is bigger");

if (a > 0) console.log("positive");
else if (a < 0) console.log("negative");
else console.log("zero");

if (a < 0 || b < 0 || c < 0) console.log("angulo invalido");
else console.log(a + b + c <= 180);

switch (chessPiece.toLowerCase()) {
  case "king":
    console.log("1 square in any direction");
    break;
  case "queen":
    console.log("any direction");
    break;
  case "rook":
    console.log("horizontaly or verticaly");
    break;
  case "bishop":
    console.log("diagonals");
    break;
  case "knight":
    console.log("L shaped");
    break;
  case "pawn":
    console.log(
      "1 up or (1|2) up if it is his first move, capture 1 square diagonaly"
    );
    break;

  default:
    console.log("its not a chess piece");
    break;
}

if (porcentagem < 0 || porcentagem > 100) console.log("invalid grade");
else if (porcentagem < 50) console.log("F");
else if (porcentagem < 60) console.log("E");
else if (porcentagem < 70) console.log("D");
else if (porcentagem < 80) console.log("C");
else if (porcentagem < 90) console.log("B");
else console.log("A");

if (!(a % 2) || !(b % 2) || !(c % 2)) console.log("found at least one even");
else console.log("no evens found");

if (a < 0 || b < 0) console.log("invalid inputs");
else console.log((b - a * 0.2 + a) * 1000);

let liquido = bruto;

if (bruto < 1556.95) liquido -= 0.08 * liquido;
else if (bruto < 2594.93) liquido -= 0.09 * liquido;
else if (bruto < 5198.82) liquido -= 0.11 * liquido;
else liquido -= 570.88;
if (liquido > 4664.68) liquido -= 0.275 * liquido - 869.33;
else if (liquido > 3751.05) liquido -= 0.225 * liquido - 636.13;
if (liquido > 2826.65) liquido -= 0.15 * liquido - 354.8;
if (liquido > 1903.98) liquido -= 0.075 * liquido - 142.8;
console.log(liquido);
