let div = document.querySelector('div');
let table = document.createElement('table');
div.appendChild(table);
let tableSelector = document.querySelector('table');

function createGrid(){
    for(let row = 0; row <= 10; row++){
        let tableRow = document.createElement('tr');
        for(let column = 0; column <=10; column++){
            tableCel = document.createElement('td')
            tableRow.appendChild(tableCel)
        }
        tableSelector.appendChild(tableRow)
    }
    let cells = document.getElementsByTagName('td')
    for (cell of cells){
        cell.addEventListener('click', changeColor);
    }
}

function changeColor(){
    if (this.style.backgroundColor === 'blue'){
        this.style.backgroundColor = 'lightskyblue'
    } else{
        this.style.backgroundColor = 'blue';
    }
}

createGrid();
