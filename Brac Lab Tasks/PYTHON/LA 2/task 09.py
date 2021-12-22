num = int(input("Enter the value of N\n"))
sum = 0

for i in range (num+1):
    if i%7 == 0:
        sum += i
    else:
        continue
print(sum)