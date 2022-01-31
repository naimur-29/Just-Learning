space = " "
s1 = input("Enter a word: ")
s2 = input("Enter another word: ")

while space in s1:
    s1 = input("Enter a word: ")

while space in s2:
    s2 = input("Enter another word: ")

if len(s1) >= len(s2):
    leng = len(s1)
else:
    leng = len(s2)

for i in range (leng):
    if i < len(s1):
        print(s1[i], end="")
    if i < len(s2):
        print(s2[i], end="")
    