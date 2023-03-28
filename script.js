const canvas = document.querySelector('#canvas');
const userChoice = 16;
const gridSelection = document.querySelector('#gridSelection');

gridSelection.addEventListener('click', () => {
    const userChoice = Number(prompt("How many squares per side you looking for?"));
})
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


