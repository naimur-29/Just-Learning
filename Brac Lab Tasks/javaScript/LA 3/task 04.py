space = " "
word = input("Enter a word: ")

while space in word:
    word = input("Enter only one word: ")

word = word.lower()
word_2 = word[1:] + chr(ord(word[-1])+1)
print(word_2)