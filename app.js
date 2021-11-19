
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

const superEventHandler ={
    handleTitleClick: function() {
        title.style.color = "blue";
    },
    handleTitleRightClick: function() {
        title.innerText = "right button is clicked!";
    },
    handleMouseEnter: function(){
        title.innerText = "Mouse is here!";
    },
    handleMouseLeave: function(){
        title.innerText = "Mouse is gone!";
    },
    handleWindowResize: function(){
        title.innerText = "You just resized!";
        document.body.style.backgroundColor = "tomato";
    },
    handleWindowCopy: function(){
        alert("copier!!");
    },
    handleWindowOffline: function(){
        alert("SOS no WIFI");
    },
    handleWindowOnline: function(){
        alert("ALL Good!");
    }
}
title.addEventListener("click", superEventHandler.handleTitleClick);
title.addEventListener("contextmenu", superEventHandler.handleTitleRightClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);


window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("copy", superEventHandler.handleWindowCopy);
window.addEventListener("offline", superEventHandler.handleWindowOffline);
window.addEventListener("online", superEventHandler.handleWindowOnline);