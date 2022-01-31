string_1 = input("Enter the string you wanna split: ")
string_2 = input("Enter the character used for split: ")
print("\nSplit string: ")

for i in string_1:
    if i != string_2:
        print(i, end="")
    else:
        print()