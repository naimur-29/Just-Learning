## perfect numbers:
num = int(input("Enter the number: "))
divisor = 0
sum = 0

while divisor <= (num):
    divisor += 1
    if divisor == num:
        break
    elif num%divisor == 0:
        sum += divisor
        # print(divisor)
    else:
        continue

if sum == num:
    print(num, "is a perfect number")
else:
    print(num, "isn't a perfect number")