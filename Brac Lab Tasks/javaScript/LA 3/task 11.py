string = input("Enter anything: ")
num = int(input("Enter a num: "))

if num%2 == 0:
    num *= 2
else:
    num *= 3

string *= num
print()
print(string)