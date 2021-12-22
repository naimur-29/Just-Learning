## max min and average
# 5 10 4 -1 -100 1
start = 1
max = 0
min = 0
sum = 0
quantity = int(input("Enter how many numbers you want: "))

while start <= quantity:
    start += 1
    num = int(input("Enter any number: "))
    sum += num

    if not num <= max:
        max = num
    elif not num >= min:
        min = num
    else:
        continue
    
print("\nMaximum", max, "\nMinimum", min, "\nAverage is", sum/quantity)