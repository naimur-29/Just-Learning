try:
    list_1 = [item for item in input("Enter the items for list 1: ").split()]
    list_2 = [item for item in input("Enter the items for list 2: ").split()]
    reconstructed_list = []

    for i in list_1:
        if i not in reconstructed_list:
            reconstructed_list.append(i)

    for i in list_2:
        if i not in reconstructed_list:
            reconstructed_list.append(i)

    print()
    print("List of unique elements:", reconstructed_list)
except:
    print('Please enter the correct value...')