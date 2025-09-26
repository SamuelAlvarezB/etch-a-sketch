const mainDiv = document.getElementById("main-container");

function fillGrid(size) {
    let mainDiv = document.getElementById("main-container");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        column.style.display = "flex";
        column.style.flexDirection = "column";
        column.style.flex = 1;
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid black";
            row.style.flex = 1;
            column.appendChild(row);
        }
        mainDiv.appendChild(column);
    }
}

fillGrid(70);