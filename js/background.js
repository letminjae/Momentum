const images = ["boat.jpg", "church.jpg", "italy.jpg"];

const ramdomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `img/${ramdomImage}`

document.body.appendChild(bgImage);