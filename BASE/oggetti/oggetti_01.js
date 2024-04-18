let part1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    features: ["Air Conditioning", "Navigation System", "Bluetooth", "Backup Camera"]
};

let part2 = {
	ruote: "Cerchi in lega",
	motore: "Diesel"
}

// UNIONE SEMPLICE

console.log(`\n>>\n>> UNIONE - COPIA - +UPDATE \n>>`);

const car1 = {...part1, ...part2};
console.log(`> spread `, car1);

// COPIA 
const car2 = {...car1};
console.log(`> copia `, car2);

// UPDATE

const modifiche = {model: "Corolla LS", features: ["GPS", "Bluetooth", "Backup Camera v2"] }
const carUpdated = {...car1, ...modifiche};

console.log(`> update `, carUpdated);


// ELIMINARE DOPPIONI IN ARRAY DI OGGETTI [{...},{...}]
console.log(`\n>>\n>> ELIMINARE DOPPIONI IN ARRAY DI OGGETTI [{...},{...}] \n>>`);

let people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" }  // Duplicato intenzionale per dimostrazione
];

/*
Per sfruttare Set devo trasformarli in stringe.
Infotti Set considera due oggetti, anche se con medesime proprietà, distinti perche verifica il loro riferimento (che è a due blocchi di memoria differenti) 
*/

console.log(people);