// Calcuator assignment
let state = {
    num1: "",
    num2: "",
    num: "",

}


// Render numbers
function renderNumber() {
    let numberString=""
    let temp =""
    for (let i=1; i < 10; i++){

    temp = `<div class='c${i}' onclick='numberSelected(${i})'>${i}</div>`
    console.log('temp :>> ', temp);
    numberString += temp
}   
    numberString += `<div class='c0' onclick='numberSelected(0)'>0</div>`
    
    return numberString;
}
// Action when number button pressed
function numberSelected(num){
    //Store (Append) it into number
    state.num = state.num + num
    console.log('state.num :>> ', state.num);
    renderDisplay()
}

// Render Functions
function renderMath(){
    return 'Working in progress';
};
// Render Display
function renderDisplay(){
    displaystring = state.num
    console.log('displaystring :>> ', displaystring);
    document.getElementById("screen").innerHTML =  displaystring
};
// Render Total
function renderTotal(){
    return 'Working in progress';
};


// Take a number into first variable

// Watch for "Math" function

// Take a number into second variable

// Do math based on function if clicked on equal

    // Add
    // Subtract
    // Multiple
    // Division (watch out for the zero set as second variable)

//Return the value, display

//Page Render
function render() {
    let htmlString = `
    <center><h1> Javascript calculator </h1>
    <div class="display">
    <div id="screen"></div>
    
    </div>
    <div class="calc_home">
    ${renderNumber()}
    </div>
    <div class="math">
    ${renderMath()}
    </div>
    </center>
    `;
    document.getElementById("apps").innerHTML = htmlString;
}

render();