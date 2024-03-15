// <div class="square-easy"></div>

function generateNewElementGrid(content){
    // creo un elemento del tipo <div>...</div>
    const newElement = document.createElement('div');
    newElement.classList.add('square-easy');
    return newElement;
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}

let play = document.getElementById('play');
play.addEventListener('click', function(){
    
    // genero la griglia in base alla difficoltà
    let difficulty = document.getElementById('difficulty');
    let grid = document.getElementById('grid');
    let rBtnN = document.getElementById('reset-btn')
    grid.classList.toggle('d-block');   
    rBtnN.classList.toggle('d-flex');

    let gridElement = document.getElementById('grid');
    //creo ciclo for per inserire i quadrati nella grid
    for (let i = 0; i < 100; i++) {
        let newSquare = generateNewElementGrid()
        // aggiungo quadrato alla grid
        gridElement.appendChild(newSquare);
        // coloro di azzurro quando clicco il quadrato
        newSquare.addEventListener('click', function(){
            newSquare.classList.add('square-click')
            console.log(`Hai selezionato la casella numero: ${i + 1}`);    
        })

        let resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', function(){
            newSquare.classList.remove('square-click');
            console.log('Gioco Ricominciato')
        })
    }
})

// creo una variabile per assegnare dove mettere i quadrati
