const canvas = document.querySelector('#canvas');
let userChoice = 16;
const gridSelection = document.querySelector('#gridSelection');
const oldUserChoice = userChoice;

gridSelection.addEventListener('click', () => {
    removeGrid(oldUserChoice);
})
gridSelection.addEventListener('click', () => {
    let userChoice = Number(prompt("How many squares per side you looking for?"));
})
gridSelection.addEventListener('click', () => {
    createGrid(userChoice);
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

function recreateGrid(userChoice) {
    const subCanvas = document.querySelector('.subCanvas')
    for (let i = 0; i < oldUserChoice; i++) {
        canvas.remove(subCanvas);
        const grid = document.querySelector('.blankItem');
        for (let i = 0; i < oldUserChoice; i++) {
            subCanvas.remove(grid);
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
    
}

function removeGrid(oldUserChoice) {
    const subCanvas = document.querySelector('.subCanvas');
    for (let i = 0; i < oldUserChoice; i++) {
        canvas.remove(subCanvas);
        const grid = document.querySelector('.blankItem');
        for (let i = 0; i < oldUserChoice; i++) {
            subCanvas.remove(grid);
        }
    }
}

// for (let i = 0; i < userChoice; i++) {
//     const subCanvas = document.createElement('div');
//     subCanvas.classList.add('subCanvas');
//     canvas.appendChild(subCanvas);
//     for (let i = 0; i < userChoice; i++) {
//         const grid = document.createElement('div');
//         grid.classList.add('blankItem');
//         subCanvas.appendChild(grid);
//         grid.addEventListener('mouseover', () => {
//             grid.classList.add('hover');
//         })
//         grid.addEventListener('mouseout', () => {
//             grid.classList.remove('hover');
//         })
//     }
// }

createGrid(userChoice);