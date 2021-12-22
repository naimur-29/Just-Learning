num_1 = int(input("Enter the first number: "))

if num_1 % 2 == 0 and num_1 % 5 == 0:
    print("No")
elif num_1 % 2 == 0:
    print("No")
elif num_1 % 5 == 0:
    print("No")
else:
    print(num_1)