const canvas = document.querySelector('#canvas');

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('blankItem');
    canvas.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.classList.add('hover');
    })
    grid.addEventListener('mouseout', () => {
        grid.classList.remove('hover');
    })
}


