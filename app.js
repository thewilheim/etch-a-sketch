const container = document.querySelector(".container");
const resetBtn = document.getElementById("reset");
const rainbow = document.getElementById("rainbow");


function createGrid(gridNumber){

    let gridArea = gridNumber * gridNumber;

    for (let i = 0; i < gridArea; i++) {
        
        const grid = document.createElement("div");

        grid.classList.add("grey");
    
        container.appendChild(grid);

        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    }


    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.addEventListener('mouseover', changeColor));

}

// Creates the default grids
createGrid(35);

// Change color
let rainbowBtn = false;

function changeColor () {

    if (rainbowBtn ===  true){
        let letters = '0123456789ABCDEF';
        let color = '#';
    
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    
        this.style.backgroundColor = `${color}`;
    } else {
        this.style.backgroundColor = `#5c5c5c`;
    }
}

// Reset Drawing

function reset() {

    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.style.backgroundColor = "lightgray");

    rainbowBtn = false;
    
}

resetBtn.addEventListener("click", reset);

rainbow.addEventListener("click", (e) => {
    if (rainbowBtn === false) {
        rainbowBtn = true;
    } else {
        rainbowBtn = false;
    }
});