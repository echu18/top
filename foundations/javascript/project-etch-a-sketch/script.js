
//== Page Elements ==//
let gridContainer = document.getElementById('grid-container');

let swatches = document.querySelectorAll('.swatch');

let currentFunction = 'draw';
let currentColor = 'blush';


// Set bg color for swatches dynamically
// swatches.forEach(swatch => swatch.style.backgroundColor = swatch.dataset.hex)
// Set swatch click to change draw color
swatches.forEach(function(swatch) {
  swatch.addEventListener('click', function(e){
    let color = Array.from(e.target.classList).filter(className => className !== 'swatch');
    currentColor = color;
    
  })
})

// TODO - current swatch colors are too light for a white background, either use darker colors or make page bg dark
// TODO - drawing over previous color with new color doesn't reset opacity back to 0.1, need to add logic for that


// Buttons
let drawBtn = document.getElementById('btn-draw');
let eraseBtn = document.getElementById('btn-erase');



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

          let currentOpacity = parseFloat(e.target.style.opacity);

          if (!currentOpacity) {
            currentOpacity = 0.1
            e.target.style.opacity = currentOpacity;
          } else {
            e.target.style.opacity = currentOpacity += 0.1;
          }
          e.target.classList.add(currentColor);

        } else if (currentFunction == 'erase') {
          if (e.target.classList.contains(currentColor)) {
            e.target.classList.remove(currentColor)
          }
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

