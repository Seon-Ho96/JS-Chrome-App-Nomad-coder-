const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    // element stringfy
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function deleteTodo(event){
    //클릭한 버튼의 부모요소(li) 삭제
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li"); //element 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); //element 생성
    span.innerText = newTodo.text;
    const button = document.createElement("button"); //delete button
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span); //자식 요소 만들기
    li.appendChild(button);
    toDoList.appendChild(li);
    // console.log(li);
    // todo list item 새로고침하면 사라짐, 추가한 item 삭제 기능 필요
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    // console.log(newTodo, toDoInput.value);
    paintTodo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    // arrow function
    // parsedToDos.forEach((item) => console.log("this is the turn of ",item));
    
}

function filter(){
    
}