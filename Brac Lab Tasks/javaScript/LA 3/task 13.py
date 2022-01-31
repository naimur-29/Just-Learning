string = input("Enter anything: ")
counter = 0
letters = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"

for i in string:
    if i in letters:
        counter += 1
    
    if counter%2 != 0:
        print(i.upper(), end="")
    else:
        print(i.lower(), end="")