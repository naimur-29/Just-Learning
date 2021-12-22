## for any string:
# string = input("Enter what you'd like to separate: ")
# key = len(string)

# for i in range (key):
#     if i == key-1:
#         print(string[i])
#     else:
#         print(string[i], end=",")



# num = 123
# print(len(str(num)))


## for number only:
num = int(input("Enter what number you'd like to separate: "))

while num >= 0:
    key = int("1" + ("0"*(len(str(num))-1)))

    if num%key == 0:
        print(num//key)
        break
    else:
        print(num//key, end=",")

    num %= key