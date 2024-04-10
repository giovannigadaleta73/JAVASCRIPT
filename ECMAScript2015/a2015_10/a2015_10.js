let myKey1 = Symbol('eventuale descrizione')
console.log(myKey1) // Symbol(eventuale descrizione)

// descrizione rintracciabile:
//
let myKey2 = Symbol.for('descrizione')
console.log(Symbol.keyFor(myKey2)) // descrizione


console.log(`>> Symbol definizione base`)

let myS1 = Symbol('casa')
console.log(myS1)

let myS2 = Symbol('casa')

console.log(myS1 == myS2)

console.log(Symbol('casa') == Symbol('casa'))


console.log(`>> Symbol.for`)

let myS3 = Symbol.for('auto')
let myS4 = Symbol.for('auto')

console.log(myS3 == myS4) // true

let myS5 = Symbol('auto')

console.log(myS4 == myS5) // flase

console.log(Symbol.keyFor(myS4)) // auto
console.log(Symbol.keyFor(myS1)) // undefined

console.log('>> Symbol usato per nascondere alcune proprietà')

const SessionManager = (() => {
	const activeSessionsSymbol = Symbol('activeSessions');
  
	class SessionManager {
	  constructor() {
		this[activeSessionsSymbol] = 0;
	  }
  
	  startSession() {
		this[activeSessionsSymbol]++;
		console.log('Sessione iniziata. Numero attuale di sessioni:', this[activeSessionsSymbol]);
	  }
  
	  endSession() {
		if (this[activeSessionsSymbol] > 0) {
		  this[activeSessionsSymbol]--;
		  console.log('Sessione terminata. Numero attuale di sessioni:', this[activeSessionsSymbol]);
		} else {
		  console.log('Nessuna sessione da terminare.');
		}
	  }
  
	  getActiveSessions() {
		return this[activeSessionsSymbol];
	  }
	}
  
	return SessionManager;
  })();
  
  const manager = new SessionManager();
  manager.startSession(); // Sessione iniziata. Numero attuale di sessioni: 1
  manager.startSession(); // Sessione iniziata. Numero attuale di sessioni: 2
  console.log(manager.getActiveSessions()); // 2
  manager.endSession(); // Sessione terminata. Numero attuale di sessioni: 1
  