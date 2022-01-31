# num = input()
# num= num[::-1]
# print(num)
# // = floor division



# num = (input("Enter what you'd like to separate: "))
# num = num[::-1]

# for i in num:
#     if i != num[-1]:
#         print(i, end=",")
#     else:
#         print(i)



#123
num = int(input("Enter what number you'd like to separate: "))

while num >= 0:
    if num//10 == 0:
        print(num%10)
        break
    else:
        print(num%10, end=",")
    
    num //= 10