string = input("Enter anything: ")
max = 0
letter = ""
letter_1 = ""
count = 1
print()

for i in range (len(string)):
    if i == 0:
        pass
    elif string[i] == letter:
        count += 1
        if count > max:
            max = count
            letter_1 = string[i]
    else:
        count = 1
    letter = string[i]

if max == 0:
    print("None")

print(letter_1*max)