// map
console.log(`>>Json`);
const data = `
	[
	{
		"nome": "Dino",
		"cognome": "Bianchi",
		"età": 55,
		"isSposato": true,
		"figli": ["Marina"]
	},
	{
		"nome": "Edoardo",
		"cognome": "Brunetto",
		"età": 30,
		"isSposato": true,
		"figli": ["Diego", "Claudio"]
	}]`;



console.log(`>> JSON.parse(Json string) -> Js object`);
const persone = JSON.parse(data);
console.log(persone);

console.log(`>> JSON.stringify(Js object) -> Json string`);
const stringaJson = JSON.stringify(persone)
console.log(stringaJson);

console.log(`>> fetch json()`);
fetch('./data.json')
.then(response => response.json())
.then(info => console.log(info))
