try:
    list_1 = [item for item in input("Enter the items: ").split()]
    list_2 = [item for item in input("Enter the other items: ").split()]
    value = 0

    for i in list_1:
        if i in list_2:
            value += 1

    if not value == 0:
        print("True")
    else:
        print("False")
except:
    print("Please enter the correct values...")