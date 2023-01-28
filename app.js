function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = 0;
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

let letters = document.querySelectorAll(".letter");
let intervalId = setInterval(function() {
    for(let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);