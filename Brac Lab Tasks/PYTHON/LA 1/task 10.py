num_1 = int(input("Enter the first number: "))

if not num_1 % 2 == 0 and not num_1 % 5 == 0:
    print(num_1)
elif num_1 % 2 == 0 and num_1 % 5 == 0:
    print("No")
elif num_1 % 2 == 0:
    print("No")
elif num_1 % 5 == 0:
    print("No")