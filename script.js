var calcC = document.getElementById("calc-c");
var calcDel = document.getElementById("calc-del");
var calcPerc = document.getElementById("calc-perc");
var calcPlus = document.getElementById("calc-plus");
var calcDiv = document.getElementById("calc-div");
var calcSub = document.getElementById("calc-sub");
var calcMult = document.getElementById("calc-mult");
var calcDec = document.getElementById("calc-dec");
var calcEqual = document.getElementById("calc-equal");
var numInput = document.getElementById("num-input");
var buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        numInput.value += button.textContent.trim();
    })
});

function clearInput() {
    numInput.value = "";
}

function calculateValue(equation, sign) {
    
}