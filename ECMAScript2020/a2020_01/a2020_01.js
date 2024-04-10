console.log("\n>> Nullish ")

let data1;
let data2 = null;
let data3 = 0;
let data4 = "";
let data5 = [3,4];

const risultato1 = data1 ?? "Altro1"
const risultato2 = data2 ?? "Altro2"
const risultato3 = data3 ?? "Altro3"
const risultato4 = data4 ?? "Altro4"
const risultato5 = data5 ?? "Altro5"

console.log(risultato1, risultato2, risultato3, risultato4, risultato5)

