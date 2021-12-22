## square:
row = int(input("Enter the row size: "))
column = int(input("Enter the column size: "))

for i in range (row):
    for i in range (1,column+1):
        print(i, end="")
    
    print("\n")