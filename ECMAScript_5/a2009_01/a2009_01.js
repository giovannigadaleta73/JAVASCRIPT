let risultato = [
	{nome: "Zoff", ruolo: "portiere"},
	{nome: "Cabrini", ruolo: "difensore"},
	{nome: "Tardelli", ruolo: "centrale"},
	{nome: "Rossi", ruolo: "attaccante"},
];

let team = risultato.reduce((newObj, el) => {
	 newObj[el.ruolo] = el.nome;
	 return newObj;
}, {})

console.log(team);
