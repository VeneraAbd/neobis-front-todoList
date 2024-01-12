let todos;
window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || []; //if there any todos saved in the local storage, we are gonna get those
	const nameInput = document.querySelector("#user-name"); //i am getting my inputfield
	const newTodoForm = document.querySelector("#create-todo__form"); //getting my form

	const username = localStorage.getItem('username') || ""; //getting username

	nameInput.value = username;
	nameInput.addEventListener('change', e => {
		localStorage.setItem('username', e.target.value);//this will save username to the localStorage
	})

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const todo = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo); //adding new todos to the array

		localStorage.setItem("todos", JSON.stringify(todos)); //here we are gonna save our items, JSON stringify turns our array into JSON strings, because Local storage allows to save only promitive values like string
		e.target.reset(); //resetting target, which is our form, so the input field is no longer filled, and radio button no longer ticked

		DisplayTodos();
	})
	DisplayTodos();
})	

function DisplayTodos(){
	const todoList = document.querySelector("#todo-list");

	todoList.innerHTML = "";//we set here to empty string so every time we display, it clears the elements;

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');//checkbox
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const editButton = document.createElement('button');
		const deleteButton = document.createElement('button');
		const contentInput = document.createElement('input');//type text for tasks

		input.type = 'checkbox';
		input.checked = todo.done;
		input.classList.add('circle');

		contentInput.type = 'text';
		contentInput.setAttribute("readonly", true)
		contentInput.value = todo.content;

		if(todo.category === "personal"){
			input.classList.add('personal')
		}else{
			input.classList.add('business')
		}

		content.classList.add('todo-content');
		actions.classList.add('actions');
		editButton.classList.add('edit');
		deleteButton.classList.add('delete');

		editButton.innerHTML = "Edit";
		deleteButton.innerHTML = "Delete";
		content.appendChild(contentInput)
		
		label.appendChild(input);
		actions.appendChild(editButton);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);
		todoList.appendChild(todoItem);
		

		if(todo.done){
			todoItem.classList.add('done')
			contentInput.classList.add('done')
		}

		// toggling checked or unchecked
		input.addEventListener('click', e => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if(todo.done){
				console.log("true");
				todoItem.classList.add('done')
			}else{
				todoItem.classList.remove('done')
				console.log("false")
			}
			DisplayTodos();
		})

		// Edit button
		editButton.addEventListener('click', (e) => {
			contentInput.removeAttribute('readonly');
			contentInput.focus();
			contentInput.addEventListener('blur', (e) => {
				contentInput.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				
				DisplayTodos();
			})
		})
		
		// Delete button
		deleteButton.addEventListener('click', e => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos();
		})
	})
}