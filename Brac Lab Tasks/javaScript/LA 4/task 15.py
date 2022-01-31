try:
    lst = [int(item) for item in input("Enter five numbers for comparison: ").split()][:5]
    max = 0
    max_2 = 0

    for i in lst:
        if i >= max:
            max = i
    
    for i in lst:
        if i >= max_2 and i < max:
            max_2 = i
            ind = lst.index(i)

    print(lst)
    print("The second largest number is", max_2, "at index", ind)
except:
    print("Please enter the correct values...")