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
.then(dati => {
	dati.forEach(element => {
		const divElement = document.createElement("div")
		divElement.innerHTML = `
		<h2> ${element.nome} </h2>
		<p>${element.sposato ? 'sposato' : 'Celibe'}</p>
		<p>${element.età} anni</p>
		<p>${element.figli?.join(', ') ?? "Nessun figlio"}</p>`
		

		document.body.appendChild(divElement);
	});

})
/*<p>${element.figli ? 'figli:'+element.figli.join(', ') : 'Nessun figlio'}</p>`;
${element.figli?.join(', ')} mosta a schermo undefined: poich' la proprietà è undefined js non applica .join(', ') che andrebbe in errore.
 a questo punto gestisco undefined:
${element.figli?.join(', ') ?? "Nessun figlio"}
versione breve per:
${element.figli ? 'figli:'+element.figli.join(', ') : 'Nessun figlio'}</p>`;


*/
