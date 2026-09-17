// elements

var calcC = document.getElementById("calc-c");
var calcDel = document.getElementById("calc-del");
var calcPerc = document.getElementById("calc-perc");
var calcPlus = document.getElementById("calc-plus");
var calcDiv = document.getElementById("calc-div");
var calcSub = document.getElementById("calc-sub");
var calcMult = document.getElementById("calc-mult");
var calcDec = document.getElementById("calc-dec");
var calcEqual = document.getElementById("calc-equal");
var calcErase = document.getElementById("calc-erase");
var numInput = document.getElementById("num-input");
var buttons = document.querySelectorAll(".btn");
var numbersBtns = document.querySelectorAll(".number-btn");
var operatorsBtns = document.querySelectorAll(".operator-btn");


// variables

var firstNum = "";
var secondNum = "";
var sign = "";
var result = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        numInput.value += button.textContent.trim();
    })
});

numbersBtns.forEach(button => {
    button.addEventListener("click", () => {
        if(sign === "") {
            firstNum += button.textContent.trim();
        } else {
            secondNum += button.textContent.trim();
        }
    })
});

calcPlus.addEventListener("click", () => { operator = "+"; }); calcSub.addEventListener("click", () => { operator = "-"; }); calcMult.addEventListener("click", () => { operator = "*"; }); calcDiv.addEventListener("click", () => { operator = "/"; });
calcErase.addEventListener("click", () => {
    clearInput()
})

function clearInput() {
    numInput.value = "";
}



function calculateValue(equation, sign) {

}