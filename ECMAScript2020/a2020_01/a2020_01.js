console.log("\n>> Nullish ")

let test_1;
let test_2 = null;
let test_3 = 0;
let test_4 = "";
let test_5 = [3,4];
let test_6 = [];
let test_7 = {};

const risultati = [];
risultati.push(test_1 ?? "Altro");
risultati.push(test_2 ?? "Altro");
risultati.push(test_3 ?? "Altro");
risultati.push(test_4 ?? "Altro");
risultati.push(test_5 ?? "Altro");
risultati.push(test_6 ?? "Altro");
risultati.push(test_7 ?? "Altro");

let i=1;
risultati.map(item => {console.log(`\n ${i}: ${item}`); i++ })

