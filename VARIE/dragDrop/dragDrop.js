// Drag and Drop

const items = [
	{ id: 1, text: "Item 1", color: "#3498db" },
	{ id: 2, text: "Item 2", color: "#2ecc71" },
	{ id: 3, text: "Item 3", color: "#e74c3c" },
	{ id: 4, text: "Item 4", color: "#f39c12" },
	{ id: 5, text: "Item 5", color: "#9b59b6" },
]

const list = document.getElementById("sortable-list");

items.forEach(item => {
	const li = document.createElement("li")
	li.innerText = item.text;
	li.dataset.id = item.id;
	li.style.backgroundColor = item.color;
	li.draggable = true

	list.appendChild(li)
})

let draggingElement = null;

list.addEventListener('dragstart', (e) => {
	draggingElement = e.target;
	e.dataTransfer.effectAllowed = "move";
	e.dataTransfer.setData("text/plain", null);
	draggingElement.classList.add("dragging");
})

list.addEventListener("dragover", (e) => {
	e.preventDefault();
	const targetElement = e.target;

	if (targetElement.tagName === "LI") {
		const bounding = targetElement.getBoundingClientRect();
		const offset = bounding.y + bounding.height / 2;

		if (e.clientY < offset) {
			list.insertBefore(draggingElement, targetElement);
		}
		else {
			list.insertBefore(draggingElement, targetElement.nextElementSibling);
		}
	}
});

list.addEventListener('dragend', () => {
	draggingElement.classList.remove("dragging");
	draggingElement = null;

	const updatedItems = [];
	const newList = document.querySelectorAll('li') 
	
	newList.forEach(li => {
		const itemId = parseInt(li.dataset.id, 10);
		const item = items.find(item => item.id == itemId);
		updatedItems.push(item);

	})
	items.length = 0;
	items.push(...updatedItems);
	console.log(items);

});



