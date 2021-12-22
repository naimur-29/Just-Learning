try:
    lst = list(int(item) for item in input("Enter the numbers: ").split())[:10]

    for i in lst:
        if i%2 == 0:
            lst.remove(i)

    print("The list of odd numbers", lst)
except:
    print("Please enter the correct values...")