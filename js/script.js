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
            //e.target.style.backgroundColor = "black";
        })
        grid.addEventListener("mouseenter", (e) => {
            if (mouseDown) {
                e.target.style.backgroundColor = "black";
            }
        })
        grid.addEventListener("mouseup", (e) => {
            mouseDown = false;
        })
        grid.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "black";
        })
    })
}

fillGrid(16);
addEventListenerToGrid();

const sliderDiv = document.getElementById("slider-div");
const slider = document.getElementById("grid-range");
const sliderValue = document.createElement("p");
sliderValue.textContent = slider.value;
sliderDiv.appendChild(sliderValue);

//slider.oninput = function() { sliderValue.textContent = this.value }

slider.addEventListener("input", (e) => {
    sliderValue.textContent = e.target.value;
})