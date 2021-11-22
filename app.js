function windowResised() {
    let width = window.innerWidth;
    if(width < 1000 && width >= 600){
        document.body.style.backgroundColor = "violet";
    } else if(width < 600){
        document.body.style.backgroundColor = "aqua";
    } else {
        document.body.style.backgroundColor = "beige";
    }
    
}

window.addEventListener("resize",windowResised);