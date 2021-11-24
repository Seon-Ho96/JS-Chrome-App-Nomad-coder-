// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// querySelector로 다른 element에서 element 뽑기 가능
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

const HIDDEEN_CLASSNAME = "hidden"; //관습적으로 string으로만 이루어진 변수는 대문자로 표기
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //function의 첫번째 argument는 방금 일어난 것(event)에 대한 정보를 가지고 있다.
    event.preventDefault();
    //event의 기본행동을 막는 함수 : 새로고침도 포함
    //value값은 input에 입력한 값 (기본값 설정 가능 - html에서)
    loginForm.classList.add(HIDDEEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("Your name is too long");
    // }
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEEN_CLASSNAME);
}

function handleLinkClick(event){
    event.preventDefault()
    // alert("Click!"); 링크이동 막음(ok누르면 링크 이동)
}
//fddasdf

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername);
}