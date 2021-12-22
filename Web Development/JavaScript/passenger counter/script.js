let count = 0
let total = 0

function increment() {
    count += 1
    document.getElementById("count").innerText = count
}
function save() {
    total += count
    count = 0
    document.getElementById("count").innerText = count
    document.getElementById("total_pass").innerText = total
    
}