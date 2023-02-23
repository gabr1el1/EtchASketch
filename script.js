const container = document.querySelector('.container');
//let myClassRule = document.styleSheets[0].cssRules[8]; //marked class
const btnChangeGrid = document.querySelector(".change-grid");
btnChangeGrid.addEventListener('click',changeGrid);
const rowsInput = document.querySelector(".input-rows");
const boxesInput = document.querySelector(".input-boxes");
rowsInput.value = "16";
boxesInput.value = "16";
let draw = false;
container.addEventListener('mousedown',function(){
    draw = true;
});
container.addEventListener('mouseup',function(){
    draw = false;
});
function changeGrid(){
    if(rowsInput.value=="" || boxesInput==""){
        alert("Values must not be empty");
    }
    let rowsValue = parseInt(rowsInput.value);
    let boxesValue = parseInt(rowsInput.value);
    if(rowsValue<1 || rowsValue>100 
    || boxesValue <1|| boxesValue > 100){
        alert("Ranges of both rows and boxes must be 1-100")
        rowsInput.value="";
        boxesInput.value="";
    }else{
        createGrid(rowsInput.value, boxesInput.value);
    }
}
function createGrid(rows, boxes){
    
    container.innerHTML = "";
    //We create the rows of divs
    for(let i=0; i<rows;i++){
        let row= document.createElement("div");
        row.classList.add("row");
        //We create the divs for each row
        for(let j=0;j<boxes;j++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute('draggable',false);
            box.addEventListener('mouseover',changeColorMouseOver);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
function changeColorMouseOver(event){
    if(draw){
        const box = event.target;
        let red = Math.floor(Math.random() * (255 - 0) + 0); 
        let green = Math.floor(Math.random() * (255 - 0) + 0); 
        let blue = Math.floor(Math.random() * (255 - 0) + 0); 
        box.setAttribute('style',`background-color: rgb(${red}, ${green}, ${blue})`);
    }
    
    //myClassRule.style.backgroundColor = "rgb(x, y, z)";
    //box.classList.add("marked");
}
createGrid(16,16);