// let marina = 10;
// let silvia = 50;
// let iza = 90;
// let idade = 0;
// let maisNova = "";

// if(marina < silvia && marina < iza) { maisNova = "marina"; idade = marina}
// else if (silvia < marina && silvia < iza) { maisNova = "silvia"; idade = silvia}
// else {maisNova = "iza"; idade = iza}
// console.log(`${maisNova} é a pessoa mais jovem e possui ${idade} anos de idade`);

// let age = 25;
// let sex = "M";
// let weight = 70;
// let height = 180;
// let basal = 0;

// let basalUnisex = height * 6.25 + weight * 9.99 - age * 4.92;
// if(age < 0 || weight < 0 || height < 0) console.log("entrada invalida");
// else if (sex === "F") basal = basalUnisex - 161;
// else basal = basalUnisex + 5;

// console.log(`A taxa metabólica basal é: ${basal.toFixed(1)} Kcal`);

let key = 5;
let lanche = "";

switch (key) {
  case 1:
    lanche = "Trybe Lanche Feliz";
    break;
  case 2:
    lanche = "McTrybe";
    break;
  case 3:
    lanche = "TrybeWooper";
    break;
  case 4:
    lanche = "X-Trybe";
    break;
  case 5:
    lanche = "Triplo Trybe com JS";
    break;

  default:
    lanche = "Ainda não possuímos esta opção :(";
    break;
}

console.log(lanche);
