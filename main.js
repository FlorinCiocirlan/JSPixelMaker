let div = document.querySelector('.grid');
let table = document.createElement('table');
div.appendChild(table);
let tableSelector = document.querySelector('table');
let colorsArray =['blue','black','red','white','green', 'grey', 'lightskyblue', 'yellow','pink','orange']
let color = 'red';
let divColorPicker = document.querySelector('.colorPicker');
function createPicker(){
    for (colors of colorsArray){
        let button = document.createElement('button');
        button.style.backgroundColor = colors;
        button.style.margin = '3px';
        divColorPicker.appendChild(button);
    }
}
createPicker();

let buttons = document.getElementsByTagName('button')

function chooseColor(){
    for (button of buttons){
        button.addEventListener('click',function(){
            color = this.style.backgroundColor;
            this.setAttribute('value','ALOOOOOOOOOOOOOOOO');
        })
    }
}

chooseColor();


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
    this.style.backgroundColor = color;
}

createGrid();
