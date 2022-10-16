import "./styles.css";

let dni: number = prompt("numero DNI");

let restoDivisionDni: number = dni % 23;
console.log(restoDivisionDni);

let arrayLetras: string = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];

for (let index = 0; index < arrayLetras.length; index++) {
  const element = arrayLetras[index];
  if (restoDivisionDni < 23) {
    let letra: string = arrayLetras[+restoDivisionDni];

    console.log("DNI" dni +" "+ "Posicion" restoDivisionDni +" "+ "Letra" letra);
  }
}
