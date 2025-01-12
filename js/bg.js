const images = ["0.jpg", "1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");

body.style.background = `url('img/bg/${chosenImage}') center center fixed`;
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no'
body.style.transition = 'background-image 1s';
