## divisors:
num = int(input("Enter the number: "))
counter = 0
divisor = 0
while divisor <= num:
    divisor += 1
    if divisor == num:
        print(divisor)
        counter += 1
        break
    elif num%divisor == 0:
        print(divisor, end=",")
        counter += 1
    else:
        continue

if counter > 1:
    print("There are", counter, "divisors")
else:
    print("There is only", counter, "divisor")