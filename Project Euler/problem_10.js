let evilLimit = 2000000
let count
let sum = 0

for (let num = 1; num < evilLimit; num++) {
    count = 0
    for (let i = 1; i <= num; i++) {
        if (num%i == 0) {
            count++
        }
    }
    if (count == 2) {
        sum += num
        // console.log(num)
    }
}
console.log(sum)