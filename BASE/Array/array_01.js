const arr1 = [1,2,3];
const arr2 = [4,5,6];

let array1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
let array2 = [{ id: 3, name: "Charlie" }, { id: 4, name: "Dana" }];

const arrD1 = [1,2,3,4];
const arrD2 = [3,4,5];

// UNIONE SEMPLICE
console.log(`\n>>\n>> UNIONE SEMPLICE \n>>`);

const unione1 = arr1.concat(arr2)
console.log(`> concat `, unione1);

const unione2 = [arr1,arr2];
console.log(`> unione `, unione2);

const unione3 = [...arr1,...arr2];
console.log(`> spread `, unione3);

let unione4 = array1.concat(array2);
console.log(`> concat `, unione4);


let unione5 = [...array1, ...array2];
console.log(`> spread `, unione5);

// UNIONE SENZA DUPLICATI
console.log(`\n>>\n>> UNIONE SENZA DUPLICATI \n>>`);

let unione6 = [...arrD1, ...arrD2];
let unione6Set = new Set(unione6);
let unione7 = [...unione6Set];
console.log(`> spread `, unione6);
console.log(`> trasformo in Set `, unione6Set);
console.log(`> ritrasformo in Array `, unione7);

// SEMPLIFICAZIONE IN UN UNICO PASSAGGIO
let unione8 = [...new Set([...arrD1, ...arrD2])];
console.log(`> spread > Set > Array `, unione8);

