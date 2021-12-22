space = " "
s1 = input("Enter a word: ")
s2 = input("Enter another word: ")

while space in s1 or len(s1) == 1:
    s1 = input("Enter a word: ")

while space in s2 or len(s2) == 1:
    s2 = input("Enter another word: ")

reconstracted_string = s2[-1] + s1[-1] + s2[0] + s1[0]
print()
print(reconstracted_string)