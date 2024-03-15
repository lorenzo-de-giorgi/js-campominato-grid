// <div class="square-easy"></div>

function generateNewElementGrid(content){
    // creo un elemento del tipo <div>...</div>
    const newElement = document.createElement('div');
    newElement.classList.add('square-easy');
    return newElement;
}

// creo una variabile per assegnare dove mettere i quadrati
let gridElement = document.getElementById('grid');
//creo ciclo for per inserire i quadrati nella grid
for (let i = 0; i < 100; i++) {
    let newSquare = generateNewElementGrid()
    // aggiungo quadrato alla grid
    gridElement.appendChild(newSquare)
}