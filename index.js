// Calcuator assignment

// Render numbers
function renderNumber() {
    return 'Working in progress';
}
// Render Functions
function renderMath(){
    return 'Working in progress';
};
// Render Display
function renderDisplay(){
    return 'Working in progress';
};
// Render Total
function renderDisplay(){
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
    ${renderDisplay()}
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