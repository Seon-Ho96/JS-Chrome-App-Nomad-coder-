const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    // element stringfy
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //localstorage 에는 string만 저장 가능, array 저장 불가 -> stringfy
}
function deleteTodo(event){
    //클릭한 버튼의 부모요소(li) 삭제
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();

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

    //save value
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);

    //Make empty
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

const savedToDos = localStorage.getItem(TODOS_KEY);
 
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    //foreach : elements 마다 함수를 실행해줌
    // arrow function
    // parsedToDos.forEach((item) => console.log("this is the turn of ",item));
    
}

//[1,2,3,4,5].filter(sexyFilter()) : true에 해당하는 인덱스만 남아 새 array를 생성