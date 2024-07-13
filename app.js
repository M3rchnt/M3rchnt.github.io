const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const box1 = document.getElementById("project1");
const box2 = document.getElementById("project2");
const box3 = document.getElementById("project3");

btn.addEventListener("click", changeColor);

function changeColor() {
    let hexColor1 = "#";
    let hexColor2 = "#";
    let hexColor3 = "#";
    for (let i = 0; i < 6; i++) {
        hexColor1 += hex[getRandomNumber()];
        hexColor2 += hex[getRandomNumber()];
        hexColor3 += hex[getRandomNumber()];
    }
    box1.style.backgroundColor = hexColor1;
    box2.style.backgroundColor = hexColor2;
    box3.style.backgroundColor = hexColor3;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}