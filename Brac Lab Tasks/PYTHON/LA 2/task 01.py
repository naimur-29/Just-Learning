# 24, 18, 12, 6, 0, -6
# -10, -5, 0, 5, 10, 15, 20
# 18, 27, 36, 45, 54, 63


first_number = int(input("Enter the first number of the loop: "))
second_number = int(input("Enter the second number of the loop: "))
last_number = int(input("Enter the last number of the loop: "))

diff = first_number - second_number

if first_number > last_number:
    while last_number <= first_number:
        if not last_number == first_number:
            aesthetic = ", "
        else:
            aesthetic = "\n"
        
        print(first_number, end=aesthetic)
        first_number = first_number - diff
    print("That's all...")
else:
    while last_number >= first_number:
        if not last_number == first_number:
            aesthetic = ", "
        else:
            aesthetic = "\n"
        
        print(first_number, end=aesthetic)
        first_number = first_number - diff
    print("That's all...")