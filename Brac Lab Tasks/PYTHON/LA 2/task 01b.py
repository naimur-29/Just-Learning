# 18,-27, 36,-45,54,-63


first_number = 18
last_number = 63

diff = 9

while last_number >= first_number:
    if first_number == last_number:
        print(first_number*-1)
        print("That's all...")
        break
    elif first_number%2 == 0:
        print(first_number, end=", ")
    else:
        print(first_number*-1, end=", ")
    first_number = first_number + diff