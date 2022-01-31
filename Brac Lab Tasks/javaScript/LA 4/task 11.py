list_1 = [item for item in input("Enter the elements for list 1: ").split()]
list_2 = [item for item in input("Enter the elements for list 2: ").split()]
list_1.remove(list_1[-1])

for i in list_2:
    list_1.append(i)

print(list_1)