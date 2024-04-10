function Contatore() {
	this.numero = 0;
	let intervalId = setInterval(() => {
	  this.numero++;
	  console.log(this.numero);
	  if(this.numero >= 3) {
		clearInterval(intervalId);
	  }
	}, 1000);
  }
  
  new Contatore();