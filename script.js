const canvas = document.getElementById('canvas');
let userChoice = 16;
const gridSelection = document.querySelector('#gridSelection');
const oldUserChoice = userChoice;


// gridSelection.addEventListener('click', () => {
//     removeGrid(oldUserChoice);
// })

gridSelection.addEventListener('click', function(e) {
    getUserInput();
    removeGrid();
    createGrid();
})

// gridSelection.addEventListener('click', () => {
//     const userChoice = Number(prompt("How many squares per side you looking for?"));
// })
// gridSelection.addEventListener('click', () => {
//     removeGrid();
// })
// gridSelection.addEventListener('click', () => {
//     createGrid();
// })


function getUserInput() {
    userChoice = parseInt(prompt("How many squares per side you looking for?"));
    return userChoice;
    console.log(userChoice);
}
function createGrid() {
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

function removeGrid(createGrid) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    console.log(userChoice);
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
