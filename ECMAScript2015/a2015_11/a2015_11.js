// Parametri di Default

function saluta(nome = "Visitatore") {
	console.log(`Ciao, ${nome}!`);
}

saluta(); // Output: Ciao, Visitatore!
saluta("Giovanni"); // Output: Ciao, Giovanni!


//------------------------------------------------------

// Rest Parameters

function somma(...numeri) {
	return numeri.reduce((totale, num) => totale + num, 0);
  }
  
  console.log(somma(1, 2, 3)); // Output: 6
  console.log(somma(1, 2, 3, 4, 5)); // Output: 15

  //------------------------------------------------------

  //Spread Operator

  let numeri = [1, 2, 3];

function moltiplica(a, b, c) {
  return a * b * c;
}

console.log(moltiplica(...numeri)); // Output: 6 (equivalente a moltiplica(1, 2, 3))
