const grid = document.querySelector('#grid');
const gridSizeSlider = document.querySelector("#gridSizeSelector");
let color = 'Black&White';
let numberOfColumns = gridSizeSlider.value;
let gridSize = 0.70 * Math.min(screen.height,screen.width);

function createGrid (numberOfColumns) {
    let gridCellPercent = 100/numberOfColumns;
    let gridParameter = '';

    for (let i = 0; i < numberOfColumns*numberOfColumns; i++) {
        const div = document.createElement('div');
        div.setAttribute('style',`border: none; background-color: white`);
        div.setAttribute('id',`division`);
        grid.appendChild(div);
        if (i < numberOfColumns) {
            gridParameter = gridParameter + `${gridCellPercent}% `;
        }
    }
    grid.setAttribute('style',`grid-template-columns: ${gridParameter}; grid-template-rows: ${gridParameter} ;` + `height: ${gridSize}px ; width: ${gridSize}px `);
}

function setColorMode () {
    const colorModes = document.querySelectorAll(`input[class="color"]`);
    colorModes.forEach(colorMode => colorMode.addEventListener('click', (e) => {
        color = e.target.value;
        if (e.target.value == "Single color") {
            e.target.style.display = 'none';
            colorModes[1].style.display = 'inline';
        } else if (e.target.value == "Random color") {
            e.target.style.display = 'none';
            colorModes[0].style.display = 'inline';
        }
    }));
}

setColorMode();

function colorDiv (e) {
    if (color === "Single color") {
        e.target.style.backgroundColor = 'black';
    } else if (color === "Random color") {
        let x = Math.round(Math.random()*255) ;
        let y = Math.round(Math.random()*255) ;
        let z = Math.round(Math.random()*255) ;
        e.target.style.backgroundColor = `rgb(${x},${y},${z})`
    }
    
}

function activateGrid (divisions) {
    divisions.forEach(division => division.addEventListener('mouseover', colorDiv));
}

function activateClearButton (divisions,clearButton) {
    clearButton.addEventListener('click',function () {
        divisions.forEach(division => division.style.backgroundColor = "white")
    });
}

function etchASketch() {
    grid.innerHTML = "";
    createGrid(gridSizeSlider.value);
    const divisions = document.querySelectorAll('#division');
    activateGrid(divisions);
    const clearButton = document.querySelector("#clear");
    activateClearButton(divisions,clearButton);
    const gridSizeLabel = document.querySelector('#gridSizeLabel');
    gridSizeLabel.innerHTML = `Grid size : ${gridSizeSlider.value}`;
}

etchASketch();







