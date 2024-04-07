// ASYNC / AWAIT
// uso una sintassi IIFE (Immediately Invoked Function Expression),
(async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const json = await data.json();
	console.log(json);
	})();
