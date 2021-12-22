list_1 = [item for item in input("Enter the values for list 1: ").split()]
list_2 = [item for item in input("Enter the values for list 2: ").split()]
common_list = []

for i in list_1:
    if i in list_2:
        common_list.append(i)

print(common_list)