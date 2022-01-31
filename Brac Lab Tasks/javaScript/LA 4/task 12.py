try:
    lst = [int(item) for item in input("Enter the numbers: ").split()]

    for i in lst:
        lst[lst.index(i)] = i*i

    lst.sort()
    print(lst)
except:
    print("Please enter the correct values...")