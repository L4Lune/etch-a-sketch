const canvas = document.querySelector('#canvas');

const userChoice = 2;

// for (let i = 0; i < 4; i++) {
//     const grid = document.createElement('div');
//     grid.classList.add('blankItem');
//     canvas.appendChild(grid);
//     grid.addEventListener('mouseover', () => {
//         grid.classList.add('hover');
//     })
//     grid.addEventListener('mouseout', () => {
//         grid.classList.remove('hover');
//     })
// }

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


