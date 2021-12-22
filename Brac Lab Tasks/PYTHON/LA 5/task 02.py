tuple_1 = tuple(item for item in input("Enter the elements for your tuple: ").split())
print()

if len(tuple_1) > 3:
    tuple_2 = tuple(tuple_1[2:-2])
    print(tuple_2)
else:
    print("Not enough elements...")