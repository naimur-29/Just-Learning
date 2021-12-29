
let player_1 = "X"
let player_2 = "O"
let input = player_1
let num1 = document.getElementById("input1")
let num2 = document.getElementById("input2")
let num3 = document.getElementById("input3")
let num4 = document.getElementById("input4")
let num5 = document.getElementById("input5")
let num6 = document.getElementById("input6")
let num7 = document.getElementById("input7")
let num8 = document.getElementById("input8")
let num9 = document.getElementById("input9")
let res = document.getElementById("result")

function changePlayer() {
    if (input === player_1) {
        input = player_2
        
        if (((num1 === num2 === num3) || (num4 === num5 === num6) || (num7 === num8 === num9) || (num1 === num4 === num7) || (num2 === num5 === num8) || (num3 === num6 === num9) || (num1 === num5 === num9) || (num3 === num5 === num7))) {
            res.textContent = 100
        }
    }
    else {
        input = player_1
    }

    
}

function takeInput1() {
    document.getElementById("input1").textContent = input
}
function takeInput2() {
    document.getElementById("input2").textContent = input
}
function takeInput3() {
    document.getElementById("input3").textContent = input
}
function takeInput4() {
    document.getElementById("input4").textContent = input
}
function takeInput5() {
    document.getElementById("input5").textContent = input
}
function takeInput6() {
    document.getElementById("input6").textContent = input
}
function takeInput7() {
    document.getElementById("input7").textContent = input
}
function takeInput8() {
    document.getElementById("input8").textContent = input
}
function takeInput9() {
    document.getElementById("input9").textContent = input
}

