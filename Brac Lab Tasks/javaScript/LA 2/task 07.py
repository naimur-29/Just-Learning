import math

n = int(input("Enter the value of n: "))
y = 0
start = 1
print("n =", n)

while start <= n:
    if start%2 == 0:
        y = y - (start**2)
    else:
        y = y + (start**2)
    
    start += 1

print("y =", y)