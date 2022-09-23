let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let maior = Number.MIN_VALUE;
let impar = 0;
let menor = Number.MAX_VALUE;
let arr = [];

for (let curr of numbers) {
    if(curr < menor) menor = curr;
    if(curr % 2) impar++; 
    if(curr > maior) maior = curr;
    sum += curr;
    console.log(curr);
}
media = sum / numbers.length;

console.log(sum);
console.log(media);
if(media > 20) console.log("valor maior que 20");
else "valor menor ou igual a 20"
console.log(maior);
console.log(impar != 0 ? impar : "nenhum valor impar encontrado");
console.log(menor);

for (let i = 0; i < 25; i += 1) console.log(arr.push(i) && i);
for (let curr of arr) console.log(curr / 2);