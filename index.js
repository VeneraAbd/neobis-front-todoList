const newTodo = document.querySelector("#add-todo");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const checkbox = document.querySelector("#checkbox:checked")
const li = document.querySelector("li")

const addTodo = () =>{
   console.log("clicked!")
}
checkbox.onchange = ()=>{
    if(checkbox.checked){
        li.classList.add("checked") 
        console.log("was checked")       
    }else{
        li.style.textDecoration ="none";
    }
}
button.addEventListener('click', addTodo)