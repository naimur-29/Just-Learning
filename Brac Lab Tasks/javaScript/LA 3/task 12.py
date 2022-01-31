string = input("Enter a string: ")
letter = input("Enter the letter you wanna remove: ")
print()

if letter in string:
    for i in string:
        if not i in letter:
            print(i, end="")
else:
    if len(string) > 3:
        string = string[1:len(string)-1]
        print(string)
    else:
        print(string)