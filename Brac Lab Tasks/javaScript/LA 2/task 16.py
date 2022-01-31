## prime number
num = int(input("Enter the number: "))
divisor = 0
count = 0

while divisor <= (num):
    divisor += 1
    
    if num%divisor == 0:
        count +=1
    else:
        continue

if count == 2 or count == 1:
    print(num, "is a prime number")
else:
    print(num, "isn't a perfect number")