space = " "
word = input("Enter a word: ")

while space in word:
    word = input("Enter only one word: ")

if len(word) < 4:
    print(word)
elif len(word) > 3:
    if word[-2:] == "er":
        print("\n" + word[:len(word)-2] + "est")
    else:
        print("\n" + word + "er")