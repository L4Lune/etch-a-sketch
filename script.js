const canvas = document.querySelector('#canvas');

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('blankItem');
    canvas.appendChild(grid);
}

