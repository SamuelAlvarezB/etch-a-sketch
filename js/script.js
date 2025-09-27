const mainDiv = document.getElementById("main-container");

function fillGrid(size) {
    let mainDiv = document.getElementById("main-container");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column-div");
        column.style.display = "flex";
        column.style.flexDirection = "column";
        column.style.flex = 1;
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row-div");
            row.style.border = "1px solid black";
            row.style.flex = 1;
            column.appendChild(row);
        }
        mainDiv.appendChild(column);
    }
}

function addEventListenerToGrid() {
    const grids = document.querySelectorAll(".row-div");
    let mouseDown = false;
    grids.forEach((grid) => {
        //let mouseDown=false;
        grid.addEventListener("mousedown", (e) => {
            mouseDown = true;
            e.preventDefault();
            if (!gridRainbow) {
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = getRandomColor();
            }
        })
        grid.addEventListener("mouseenter", (e) => {
            if (mouseDown) {
                if (!gridRainbow) {
                    e.target.style.backgroundColor = "black";
                } else {
                    e.target.style.backgroundColor = getRandomColor();
                }
            }
        })
        grid.addEventListener("mouseup", (e) => {
            mouseDown = false;
        })
        grid.addEventListener("click", (e) => {
            if (!gridRainbow) {
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = getRandomColor();
            }
        })
    })
}

function clearGrid() {
    const grids = document.querySelectorAll(".row-div");
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    })
}

function getRandomColor() {
    return "rgb(" + ((Math.random() * 255) + 1) + "," + ((Math.random() * 255) + 1) + "," + ((Math.random() * 255) + 1) + ")";
}

let gridRainbow = false;

fillGrid(16);
addEventListenerToGrid();

const sliderDiv = document.getElementById("slider-div");
const slider = document.getElementById("grid-range");
const sliderValue = document.createElement("p");
sliderValue.textContent = "Grid size: " + slider.value;;
sliderDiv.appendChild(sliderValue);

slider.addEventListener("input", (e) => {
    mainDiv.innerHTML = "";
    sliderValue.textContent = "Grid size: " + e.target.value;
    fillGrid(e.target.value);
    addEventListenerToGrid();
})

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    clearGrid();
})

const normalBtn = document.getElementById("normal-btn");
normalBtn.addEventListener("click", () => {
    gridRainbow = false;
})

const rainbowBtn = document.getElementById("rainbow-btn");
rainbowBtn.addEventListener("click", () => {
    gridRainbow = true;
})