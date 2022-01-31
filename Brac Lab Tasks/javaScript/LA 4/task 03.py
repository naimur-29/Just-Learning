# item_box = []
# print("Enter the items:")

# for i in range (5):
#     item_box.append(input())
# print()
# print("Reversed:")
# for i in item_box[::-1]:
#     print(i)

item_box = []
print("Enter the items:")

for i in range (5):
    item_box.append(input())
item_box.reverse()
print()
print("Reversed:")
for i in item_box:
    print(i)



# # Reversing a list using reverse()
# def Reverse(lst):
#     lst.reverse()
#     return lst
      
# lst = [10, 11, 12, 13, 14, 15]
# print(Reverse(lst))

# # Reversing a list using slicing technique
# def Reverse(lst):
#     new_lst = lst[::-1]
#     return new_lst
      
# lst = [10, 11, 12, 13, 14, 15]
# print(Reverse(lst))

# # Reversing a list using reversed()
# def Reverse(lst):
#     return [ele for ele in reversed(lst)]
      
# # Driver Code
# lst = [10, 11, 12, 13, 14, 15]
# print(Reverse(lst))