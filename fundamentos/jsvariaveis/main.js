const myName = "Luiz";
const birthCity = "Tubarão";
let birthYear = 1990;
console.log(myName,birthCity,birthYear);
birthYear = 2030;
//irthCity = "Florianópolis";
//fails because birthCity is declared constant and is forbidem to be changed in runtime.
console.log(birthYear,birthCity);
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';