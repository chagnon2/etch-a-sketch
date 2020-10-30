const grid = document.querySelector('#grid');
let numberOfColumns = 2;
let gridSize = 0.60 * Math.min(screen.height,screen.width);

function createGrid (numberOfColumns) {
    let gridCellPercent = 100/numberOfColumns;
    let gridParameter = '';

    for (let i = 0; i < numberOfColumns*numberOfColumns; i++) {
        const div = document.createElement('div');
        div.setAttribute('style',`border: solid; border-width: 1px; background-color: red`);
        div.setAttribute('id',`division`);
        grid.appendChild(div);
        if (i < numberOfColumns) {
            gridParameter = gridParameter + `${gridCellPercent}% `;
        }
    }
    grid.setAttribute('style',`grid-template-columns: ${gridParameter}; grid-template-rows: ${gridParameter} ;` + `height: ${gridSize}px ; width: ${gridSize}px `);
}

createGrid(numberOfColumns);

let color = 'black';
const divisions = document.querySelectorAll('#division');

function conlog (e) {
    e.target.style.backgroundColor = 'black';
}

divisions.forEach(division => division.addEventListener('mouseover',conlog));

