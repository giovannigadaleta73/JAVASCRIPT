// map
console.log(`>> map()`);

const numeri = [1, 2, 3, 4, 5];

const raddoppia = numeri.map(numero => {
	return numero % 2 == 0 ? numero * 10 : ++numero
}

);
console.log(raddoppia)



// reduce
console.log(`>> reduce()`);

let risultato = [
	{ nome: "Zoff", ruolo: "portiere" },
	{ nome: "Cabrini", ruolo: "difensore" },
	{ nome: "Tardelli", ruolo: "centrale" },
	{ nome: "Rossi", ruolo: "attaccante" },
];

let team = risultato.reduce((newObj, el) => {
	newObj[el.ruolo] = el.nome;
	return newObj;
}, {})

console.log(team);


// some()
console.log(`>> some()`);
const almenoUnoPari = numeri.some(numero => numero % 2 == 0)

console.log(almenoUnoPari)

const testo = ["case", "libri", "auto", "viaggi"]
const isL = testo.includes("l")
console.log(isL)
/*
restituisce false perché verifica se 'array contiene un elemento "l"
non verifica se dentro le stringhe compare "l"
Per verificare ciò devo usare some()  

 */

const isL2 = testo.some(parola => parola.includes("l"));
console.log(` uso di some: ${isL2}`);
