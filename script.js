const canvas = document.getElementById('canvas');
const userChoice = 16;
const gridSelection = document.querySelector('#gridSelection');
const oldUserChoice = userChoice;


// gridSelection.addEventListener('click', () => {
//     removeGrid(oldUserChoice);
// })
gridSelection.addEventListener('click', () => {
    let userChoice = Number(prompt("How many squares per side you looking for?"));
})
gridSelection.addEventListener('click', () => {
    removeGrid();
})
gridSelection.addEventListener('click', () => {
    createGrid();
})

function createGrid(userChoice) {
    for (let i = 0; i < userChoice; i++) {
        const subCanvas = document.createElement('div');
        subCanvas.classList.add('subCanvas');
        canvas.appendChild(subCanvas);
        for (let i = 0; i < userChoice; i++) {
            const grid = document.createElement('div');
            grid.classList.add('blankItem');
            subCanvas.appendChild(grid);
            grid.addEventListener('mouseover', () => {
                grid.classList.add('hover');
            })
            grid.addEventListener('mouseout', () => {
                grid.classList.remove('hover');
            })
        }
    }
}

function recreateGrid() {
    const removeSubcanvas = document.querySelector('.subCanvas');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    for (let i = 0; i < userChoice; i++) {
        const subCanvas = document.createElement('div');
        subCanvas.classList.add('subCanvas');
        canvas.appendChild(subCanvas);
        for (let i = 0; i < userChoice; i++) {
            const grid = document.createElement('div');
            grid.classList.add('blankItem');
            subCanvas.appendChild(grid);
            grid.addEventListener('mouseover', () => {
                grid.classList.add('hover');
            })
            grid.addEventListener('mouseout', () => {
                grid.classList.remove('hover');
            })
        }
    }
}

function removeGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

for (let i = 0; i < userChoice; i++) {
    const subCanvas = document.createElement('div');
    subCanvas.classList.add('subCanvas');
    canvas.appendChild(subCanvas);
    for (let i = 0; i < userChoice; i++) {
        const grid = document.createElement('div');
        grid.classList.add('blankItem');
        subCanvas.appendChild(grid);
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hover');
        })
        grid.addEventListener('mouseout', () => {
            grid.classList.remove('hover');
        })
    }
}
