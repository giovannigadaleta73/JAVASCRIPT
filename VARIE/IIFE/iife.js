// IIFE (Immediately Invoked Function Expression),

(async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const json = await data.json();
	console.log(json);
})();

(async () => {
	try {
	  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	  const json = await data.json();
	  console.log(json);
	} catch (error) {
	  console.error('Errore durante il fetch:', error);
	}
  })();
  
// Arrow Function
(() => {
	console.log('Funzione freccia che si auto-innesca.');
})();


// Function
(function saluta() {
	console.log('Funzione che si auto-innesca.');
})();

// se voglio passare dei parametri li inserisco nelle parentesi finali
(function somma(a,b){
	console.log(a+b)
})(4,6);
/*
Tieni presente che, in questo caso specifico, somma è definita come 
una funzione all'interno di una IIFE e non sarà accessibile dall'esterno delle parentesi. 
Questo significa che somma è utilizzabile solo all'interno di questa IIFE 
e non può essere chiamata nuovamente altrove nel tuo codice.

Se l'obiettivo è rendere somma riutilizzabile al di fuori della IIFE, 
dovresti definirla nel tuo ambito globale o in un ambito esterno alla IIFE. 
Le IIFE sono tipicamente usate per preservare uno spazio di nomi pulito e per 
eseguire codice all'avvio senza inquinare l'ambito globale, 
non necessariamente per definire funzioni che verranno riutilizzate.

*/

