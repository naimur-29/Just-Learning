num_1 = int(input("Enter the first number: "))
num_2 = int(input("Enter the second number: "))

sum = num_1 + num_2
product = num_1 * num_2

if num_1 > num_2:
    diff = num_1 - num_2
else:
    diff = num_2 - num_1

print("Sum = "+str(sum)+"\nProduct = "+str(product)+"\nDifference = "+str(diff))