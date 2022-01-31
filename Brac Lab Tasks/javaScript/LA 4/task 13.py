try:
    lst = [int(item) for item in input("Enter five numbers for comparison: ").split()][:5]

    for i in lst:
        if lst.index(i) == 0:
            max, min = i,i

        if i >= max:
            max = i
            ind_max = lst.index(i)
        elif i <= min:
            min = i
            ind_min = lst.index(i)

    print(lst)
    print("The largest number is", max, "at index", ind_max)
    print("The smallest number is", min, "at index", ind_min)
except:
    print("Please enter the correct values...")



# # Python code to demonstrate the working of
# # max()
 
# # printing the maximum of 4,12,43.3,19,100
# print("Maximum of 4,12,43.3,19 and 100 is : ",end="")
# print (max( 4,12,43.3,19,100 ) )


# x = [2, 8, 1, 4, 6, 3, 7]
 
# print("Sorted List returned :"),
# print(sorted(x))
 
# print("\nReverse sort :"),
# print(sorted(x, reverse=True))
 
# print("\nOriginal list not modified :"),
# print(x)