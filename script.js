const canvas = document.getElementById('canvas');
let userChoice = 16;
const gridSelection = document.querySelector('#gridSelection');
const oldUserChoice = userChoice;

gridSelection.addEventListener('click', function(e) {
    getUserInput();
    removeGrid();
    createGrid();
})

function getUserInput() {
    userChoice = parseInt(prompt("How many squares per side you looking for?"));
    if (userChoice < 100) {
        return userChoice
    } else {
        userChoice = parseInt(prompt("Enter a number less than 100 please."))
        userChoice = 16;
    }

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
            grid.addEventListener('click', () => {
                grid.classList.toggle("filled"); 
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
        grid.addEventListener('click', () => {
            grid.classList.toggle("filled"); 
        })
    }
}
