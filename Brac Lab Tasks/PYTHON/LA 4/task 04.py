try:
    list_1 = [int(item) for item in input("Enter the items for list 1: ").split()]
    list_2 = [int(item) for item in input("Enter the items for list 2: ").split()]

    reconstructed_list = []
    for i in list_1:
        if i%2 == 0:
            reconstructed_list.append(i)

    for i in list_2:
        if i%2 == 0:
            reconstructed_list.append(i)

    print()
    print("List of even numbers:", reconstructed_list)
except:
    print('Please enter the correct value...')