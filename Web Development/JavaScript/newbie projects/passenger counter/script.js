let count = 0
let total = 0
let hist = "Previous increments: "
document.getElementById("history").textContent = hist
document.getElementById("total_pass").textContent = total

function increment() {
    count += 1
    document.getElementById("increment").textContent = count
}
function save() {
    total += count
    hist += count + " + "
    count = 0
    // document.getElementById("count").innerText = count
    document.getElementById("total_pass").textContent = total
    document.getElementById("history").textContent = hist
    document.getElementById("increment").textContent = "INCREMENT"
    
}
function reset() {
    count = 0
    total = 0
    hist = "Previous increments: "
    document.getElementById("history").textContent = hist
    document.getElementById("total_pass").innerText = total
}