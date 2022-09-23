// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// let fat = 1;
// let n = 10;
// for (let i = 1; i <= n; i++) fat *= i;
// console.log(fat);

// let word = "tryber";
// let reversedWord = "";
// for (let i = word.length - 1; i >= 0; i--) reversedWord += word.charAt(i);
// console.log(reversedWord);

let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for(let str of array) {
    if(str.length > maior.length)
        maior = str;
    if(str.length < menor.length)
        menor = str;
}

console.log(maior);
console.log(menor);