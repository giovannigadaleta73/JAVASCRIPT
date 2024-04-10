export default class Persona{
	constructor (nome, cognome){
		this.nome = nome;
		this.cognome = cognome;
	}
	saluta() {
		console.log(`Saluti dalla Classe Persona: ${this.nome}`)
	}
}
