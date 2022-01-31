try:
    lst = [int(item) for item in input("Enter the items for the lists: ").split()]
    lst_1 = []

    for i in lst:
        if i not in lst_1:
            lst_1.append(i)

    print(lst_1)
except:
    print("Please enter the correct value...")