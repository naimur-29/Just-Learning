let num = 600851475143
let counter = 1
let prime_factor
let biggest_prime_factor = 0

function prime_checker(number) {
    let run = 1
    let factors = 0

    while (run <= number) {
        if (number % run == 0) {
            factors += 1
        }
        run += 1
    }
    if (factors == 2) {
        return run - 1
    }
}


while (counter <= num) {
    if (num % counter == 0) {
        prime_factor = prime_checker(counter)
        if (biggest_prime_factor < prime_factor) {
            biggest_prime_factor = prime_factor
        }
    }
    counter += 1
}
console.log(biggest_prime_factor)