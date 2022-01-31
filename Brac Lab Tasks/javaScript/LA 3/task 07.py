# [start:end:1]
# [end:start:-1]

space = " "
word = input("Enter a word: ")
para = int(input("Enter the index for reversing: "))

while space in word and len(word) == 1:
    word = input("Enter only one word: ")

reverse_word = word[para::-1] + word[para+1:]
print("Reversed from index", para, ":", reverse_word)