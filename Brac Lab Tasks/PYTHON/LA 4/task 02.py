try:
    foods = [item for item in input("Enter your favorite foods: ").split()]
    # foods = ["what", "now", "do"]
    print()
    foods.remove(foods[0])
    foods.remove(foods[0])
    foods.pop()
    foods.pop()
    print(foods)
except:
    print("Not possible")



# # # METHODS:

# # creating an empty list
# lst = []
 
# # number of elements as input
# n = int(input("Enter number of elements : "))
 
# # iterating till the range
# for i in range(0, n):
#     ele = int(input())
 
#     lst.append(ele) # adding the element
     
# print(lst)


# # number of elements
# n = int(input("Enter number of elements : "))
 
# # Below line read inputs from user using map() function
# a = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]
 
# print("\nList is - ", a)


# # try block to handle the exception
# try:
#     my_list = []
     
#     while True:
#         my_list.append(int(input()))
         
# # if the input is not-integer, just print the list
# except:
#     print(my_list)


# # list of lists as input:
# lst = [ ]
# n = int(input("Enter number of elements : "))
 
# for i in range(0, n):
#     ele = [input(), int(input())]
#     lst.append(ele)
     
# print(lst)


# # For list of integers
# lst1 = [] 
 
# # For list of strings/chars
# lst2 = [] 
 
# lst1 = [int(item) for item in input("Enter the list items : ").split()]
 
# lst2 = [item for item in input("Enter the list items : ").split()]
 
# print(lst1)
# print(lst2)