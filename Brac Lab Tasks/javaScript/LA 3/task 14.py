word_1 = input("Enter the first word: ")
word_2 = input("Enter the second word: ")
count = 0

for i in word_1:
    if i in word_2:
        count += 1

if len(word_1) != len(word_2):
    print("They're not anagram.")
elif count == len(word_1):
    print("They're anagram.")
else:
    print("They're not anagram.")