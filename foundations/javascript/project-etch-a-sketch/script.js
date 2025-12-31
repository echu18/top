
//== Page Elements ==//
let gridContainer = document.getElementById('grid-container');

// Buttons
let drawBtn = document.getElementById('btn-draw');
let eraseBtn = document.getElementById('btn-erase');

let currentFunction = 'draw'



// Set button functionality
drawBtn.addEventListener('click', function(e) {
  currentFunction = 'draw';
  console.log(currentFunction)
})

eraseBtn.addEventListener("click", function (e) {
  currentFunction = "erase";
  console.log(currentFunction);
});



//== Functions ==//

// Draw out 16 x 16 grid of square divs and attach
function createSketchContainer(){
  let grid = document.createElement('div');
  grid.id = 'grid'

  for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.id = `row-${i}`
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
      let div = document.createElement('div')
      div.classList.add('square');

      div.addEventListener('mouseenter', (e) => {
        e.preventDefault();

        if (currentFunction == 'draw') {
          // if (e.target.classList.contains("white")) {
          //   e.target.classList.remove("white");
          // }

          let currentOpacity = parseFloat(e.target.style.opacity);

          if (!currentOpacity) {
            currentOpacity = 0.1
            e.target.style.opacity = currentOpacity;
          } else {
            e.target.style.opacity = currentOpacity += 0.1;
          }
          e.target.classList.add('blue');

        } else if (currentFunction == 'erase') {
          if (e.target.classList.contains('blue')) {
            e.target.classList.remove('blue')
          }
          // e.target.classList.add('white');
          e.target.style.opacity = 0.1
        }
      })

      row.appendChild(div);
    }
    grid.appendChild(row);
  }

  gridContainer.appendChild(grid);
}




createSketchContainer();

