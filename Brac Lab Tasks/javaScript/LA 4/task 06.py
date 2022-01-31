try:
    # lst = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]
    lst = [int(item) for item in input("Enter five numbers for comparison: ").split()][:5]
    max = 0

    for i in lst:
        if i >= max:
            max = i
            ind = lst.index(i)

    print(lst)
    print("The largest number is", max, "at index", ind)
except:
    print("Please enter the correct values...")