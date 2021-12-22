space = " "
word = input("Enter a word: ")

while space in word:
    word = input("Enter only one word: ")

print()

for i in word:
    print(i, ":", ord(i))