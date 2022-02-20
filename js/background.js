const images = ["4.jpg","5.jpg","6.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

const bg = `img/${chosenImage}`;
bg.src = `url(./img/${chosenImage})`

// console.log(bgImage);

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(./img/${chosenImage})`;