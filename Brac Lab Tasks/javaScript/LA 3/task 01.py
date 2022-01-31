space = " "
word = input("Enter a word: ")

while space in word:
    word = input("Enter only one word: ")

for i in range (1,len(word)+1):
    print(word[0:i])
    print()