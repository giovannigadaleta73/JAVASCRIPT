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
		divElement.style.fontSize = "28px"
		divElement.innerHTML = `<h2> ${element.nome} ${element.cognome} </h2>
		<p>${element.sposato ? 'sposato' : 'Celibe'}</p>
		<p>${element.età} anni</p>
		<p>${element.figli?.join(', ') ?? "Nessun figlio"}</p>
		<p>${element.figli?.length ? `figli: ${element.figli.join(', ')}` : "Nessun figlio"}</p>`	

		document.body.appendChild(divElement);
	});
})


function calcolaMassimoMinimoArray(numeri) {
	const massimo = Math.max(...numeri);
	const minimo = Math.min(...numeri);
  
	return {
	  massimo,
	  minimo,
	};
  }
  
  const arrayNumeri = [10, 5, 8, 2, 6];
  const risultato = calcolaMassimoMinimoArray(arrayNumeri);
  
  console.log("Massimo:", risultato.massimo);
  console.log("Minimo:", risultato.minimo);
  console.log("Risultato:", risultato);

