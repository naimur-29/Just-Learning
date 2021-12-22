space = " "
reconstracted_word = ""
word = input("Enter a word: ")

while space in word:
    word = input("Enter only one word: ")

for i in word:
    if i not in reconstracted_word:
        reconstracted_word += i

print(reconstracted_word)