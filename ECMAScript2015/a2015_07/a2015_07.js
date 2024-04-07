
console.log(`>> Arrow Function`)

// Sintassi con parametri () => ...
console.log(`>> con parametri`)

const somma = (a, b) => a + b;
console.log(somma(5, 3)); // Output: 8


// Sintassi senza parametri 

const saluta = () => console.log('Ciao mondo!');
saluta(); // Output: Ciao mondo!


// Sintassi con 1 parametro

const quadrato = n => n * n;
console.log(quadrato(4)); // Output: 16


// Sintassi istruzioni su più righe.
/*
Se la funzione contiene più istruzioni, devi usare le parentesi 
graffe e un return esplicito (se c'è un valore da restituire).
*/

const ordina = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};


// this mantiene il suo valore dal contesto circostante.
console.log(`>> this`)

function Contatore() {
  this.numero = 0; 
   let f = () => {
      this.numero++;
      console.log(this.numero)
    }
    f(); 
    f(); 
}
let pro1 = new Contatore();


// Versione con IIFE
console.log(`>> Versione con IIFE`)

function Contatore2() {
  this.numero = 0; 
   (() => {
      this.numero++;
      console.log(this.numero)
    })();  
}


// uso di new
/*
Uso di this: Nel tuo esempio, this.numero implica che this si riferisce 
a un oggetto che possiede la proprietà numero. L'uso di new assicura che 
this all'interno di Contatore si riferisca a un nuovo oggetto specifico dell'istanza 
creata, permettendo a ogni istanza di Contatore di avere il suo proprio 
stato isolato (in questo caso, il conteggio specifico di numero).
*/
console.log(`>> new e this`)

function Contatore() {
  this.numero = 0;
  let f = () => {
    this.numero++;
    console.log(this.numero);
  };
  f();
  f();
}

let prova1 = new Contatore(); // Stampa 1 seguito da 2
let prova2 = new Contatore(); // Stampa 1 seguito da 2
//Senza new
//Se chiami Contatore() senza new:


let prova3 = Contatore();
/*
La funzione viene eseguita normalmente, ma this all'interno di 
Contatore non si riferisce a un nuovo oggetto istanza di Contatore. 
Invece, a seconda del contesto in cui Contatore è chiamato, this potrebbe 
riferirsi all'oggetto globale (window in un browser, global in Node.js) o 
essere undefined in strict mode ("use strict";). Questo significa che stai 
potenzialmente modificando o accedendo a variabili globali, il che non è di 
solito ciò che vuoi.
In questo caso specifico, senza new, l'incremento e la stampa di this.numero 
avrebbero luogo, ma potrebbero non comportarsi come previsto a causa 
del contesto di this.
*/

// Con Rest Parameters
console.log(`>> Con Rest Parameters`)
const sommaTutto = (...numeri) => numeri.reduce((acc, num) => acc + num, 0);
console.log(sommaTutto(1, 2, 3, 4)); // Output: 10
