
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("#generate");
const num = document.querySelector("#num");
const drawingColorInput = document.querySelector("#drawcolor");
let drawingColor = "#000000";

document.addEventListener('mouseup', () => {
    isDrawing = false;
});
function makeGrid(size) {
    container.innerHTML = "";
    if (size < 10 || size > 100) {
        alert("Please enter a number between 10 and 100.");
        return;
    }
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.addEventListener('mousedown', (event) => {
                isDrawing = true;
                event.target.style.transition = 'background-color 0.2s';
                event.target.style.backgroundColor = drawingColor;
            });
            row.addEventListener('mouseover', (event) => {
                if (isDrawing) {
                    event.target.style.transition = 'background-color 0.2s';
                    event.target.style.backgroundColor = drawingColor;
                }
            });
            row.classList.add("row");
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}
makeGrid(+(num.value));
buttons.forEach(button => {

    button.addEventListener("click", () => {
        const size = +num.value; makeGrid(size)
    });

});