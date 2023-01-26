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
            square.setAttribute('style',`flex: 1 1 auto`);
            square.addEventListener('mouseover', (e) => { 
                    square.classList.add('used');
            });
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

var button = document.querySelector('button');
button.addEventListener('click', (e) => {
    var size = prompt("Please enter grid size (max 100)");
    deleteGrid();
    buildGrid(size);
});
buildGrid(16);