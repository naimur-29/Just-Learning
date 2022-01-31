num_1 = int(input("Enter the first number: "))

if num_1 % 2 == 0 and num_1 % 5 == 0:
    print("Multiple of both 2 and 5")
elif num_1 % 2 == 0:
    print(num_1)
elif num_1 % 5 == 0:
    print(num_1)
else:
    print("Not a multiple")