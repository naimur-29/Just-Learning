## square:
row = int(input("Enter the size for your square: "))
column = row
element = input("Enter element for your square: ")

for i in range (row):
    for i in range (column):
        print(element, end="")
    
    print("\n")