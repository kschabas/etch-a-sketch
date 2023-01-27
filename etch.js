function deleteGrid() {
    var rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
}

function buildGrid(rownum)
{
    var x,y;

    var dim = .8*Math.min(window.innerHeight,window.innerWidth);
    var rowwidth = dim;
    var rowheight = Math.floor(dim/rownum);

    var grid = document.querySelector('.grid-container');
    grid.setAttribute('style',`height: ${dim}px; width: ${dim}px;`);
    console.log(`Dim is ${dim}`);


    for (x=0;x<rownum;x++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style',`width: ${rowwidth}px; height: ${rowheight}px; flex: 1 1 0;`);
        //row.setAttribute('style',`height: ${rowheight};`);
        for (y=0;y<rownum;y++) {
            const square = document.createElement('div');
            square.classList.add('square');
            //square.setAttribute('style',`flex: 1 1 auto;`);
            square.addEventListener('mouseover', (e) => {
                if (draw == true)  {
                    square.setAttribute('style',`background-color: ${color}`);
                } 
            });
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

var button = document.querySelector('#grid-size');
button.addEventListener('click', (e) => {
    var size = prompt("Please enter grid size (max 100)");
    if (size>100) {
        size = 100;
    }
    deleteGrid();
    buildGrid(size);
});

button = document.querySelector('#color');
button.addEventListener('click', (e) => {
    var newColor = prompt("please enter color choice");
    color = newColor;
});

button = document.querySelector('#draw');
button.addEventListener('click',(e) => {
    if (draw == true)
    {
        draw = false;
        e.currentTarget.textContent = "Turn On Pencil";
    }
    else {
        draw = true;
        e.currentTarget.textContent = "Turn Off Pencil";
    }
})

var color = "black";
var draw = true;
button = document.querySelector('#color');
buildGrid(16);