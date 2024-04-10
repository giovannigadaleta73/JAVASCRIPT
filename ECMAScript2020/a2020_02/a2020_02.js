
console.log("\n>> Optional chaining")
/*
Si susa in situazioni di incertezza, 
es quando ho risultati da una query.
Quando uso gli oggetti (es. ricevo un risultato in json) 
se una chiave non è settata ottengo "undefined" e se 
cerco una sotto proprietà di una undefined ricevo un errore
L'operatore "?." cattura questo errore e restituisce "undefined" 
*/

const persona = {Nome: "Giulia"}

console.log(persona.indirizzo) // undefined
console.log(persona.indirizzo?.cap) // undefined
//console.log(persona.indirizzo.cap) // ERRORE

const persona2 = {Nome: "Giulia", indirizzo : null}

console.log(persona2.indirizzo) // null
console.log(persona2.indirizzo?.cap) // undefined
//console.log(persona2.indirizzo.cap) // ERRORE