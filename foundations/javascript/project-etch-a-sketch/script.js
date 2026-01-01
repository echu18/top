
//== Page Elements ==//
let gridContainer = document.getElementById('grid-container');
let gridSize = 4;

let swatches = document.querySelectorAll('.swatch');

let currentFunction = 'draw';
let currentColor = 'blush';

let overwriteMode = true;

let overwriteBtn = document.getElementById("btn-overwrite");
let overwriteText = overwriteBtn.lastElementChild;

overwriteText.textContent = String(overwriteMode);

overwriteBtn.addEventListener('click', e => {
  e.preventDefault();
  overwriteMode = !overwriteMode
  overwriteText.textContent = String(overwriteMode);
})

// Set bg color for swatches dynamically
// swatches.forEach(swatch => swatch.style.backgroundColor = swatch.dataset.hex)
// Set swatch click to change draw color
swatches.forEach(function(swatch) {
  swatch.addEventListener('click', function(e){
    let color = Array.from(e.target.classList).filter(className => className !== 'swatch')[0];
    currentColor = color;
    currentFunction = 'draw';
    drawBtn.classList.add('selected-btn');
    eraseBtn.classList.remove('selected-btn');
  })
})



// TODO - current swatch colors are too light for a white background, either use darker colors or make page bg dark


// Buttons
let drawBtn = document.getElementById('btn-draw');
let eraseBtn = document.getElementById('btn-erase');
let gridSizeBtns = document.querySelectorAll('.btn-grid-size');

// Set button functionality
drawBtn.addEventListener('click', function(e) {
  currentFunction = 'draw';
  drawBtn.classList.add("selected-btn");
  eraseBtn.classList.remove("selected-btn");
})

eraseBtn.addEventListener("click", function (e) {
  currentFunction = "erase";
  eraseBtn.classList.add('selected-btn');
  drawBtn.classList.remove("selected-btn");
});

gridSizeBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    let gridSizeData = parseInt(e.target.dataset.gridSize);
    gridSize = gridSizeData;

    gridSizeBtns.forEach(btn => btn.classList.remove('selected-grid-size'));
    btn.classList.add('selected-grid-size');
    createSketchContainer();
  })
})

//== Functions ==//

// Draw out 16 x 16 grid of square divs and attach
function createSketchContainer(){
  if (gridContainer.childElementCount > 0) {
    Array.from(gridContainer.children).forEach(child => {
      gridContainer.removeChild(child)
    })
  }
  let grid = document.createElement('div');
  grid.id = 'grid'

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.id = `row-${i}`
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      let div = document.createElement('div')
      div.classList.add('square');

      div.addEventListener('mouseenter', (e) => {
        e.preventDefault();

        if (currentFunction == 'draw') {
          let squareColorArr = Array.from(e.target.classList).filter(
            (className) => className !== "square"
          );

          let squareColor = squareColorArr.length ? squareColorArr[0] : currentColor;

          let currentOpacity = parseFloat(e.target.style.opacity);

          if (!currentOpacity || squareColor != currentColor) {
            if (!currentOpacity || (squareColor != currentColor && overwriteMode == true)) {
              currentOpacity = 0.2
              e.target.style.opacity = currentOpacity;
            }
          } else {
            e.target.style.opacity = currentOpacity += 0.2;
          }

          if (!squareColorArr.length || overwriteMode == true) {
            e.target.classList = `square ${currentColor}`;
          }

        } else if (currentFunction == 'erase') {
          // if (e.target.classList.contains(currentColor)) {
          //   e.target.classList.remove(currentColor)
          // }
          e.target.classList = `square`;
          e.target.style.opacity = 0.2
        }
      })

      row.appendChild(div);
    }
    grid.appendChild(row);
  }

  gridContainer.appendChild(grid);
}




createSketchContainer();

