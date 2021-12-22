## tuple unpacking:
book_info = (
    ("Best Mystery & Thriller","The Silent Patient",68821),
    ("Best Horror","The Institute",75717),
    ("Best History & Biography","The five",31783 ),
    ("Best Fiction","The Testaments",98291)
)

for i in book_info:
    (award_category, book_name, total_votes) = i
    print(book_name, "won the '" + award_category + "' category with", total_votes, "votes.")



# # Program to understand about
# # packing and unpacking in Python
 
# # this lines PACKS values
# # into variable a
# a = ("MNNIT Allahabad", 5000, "Engineering") 
 
# # this lines UNPACKS values
# # of variable a
# (college, student, type_ofcollege) = a 
 
# # print college name
# print(college)
 
# # print no of student
# print(student)
 
# # print type of college
# print(type_ofcollege)


# # Python3 code to study about
# # unpacking python tuple using function
 
# # function takes normal arguments
# # and multiply them
# def result(x, y):
#     return x * y
# # function with normal variables
# print (result(10, 100))
 
# # A tuple is created
# z = (10, 100)
 
# # Tuple is passed
# # function unpacked them
 
# print (result(*z))


# # Python3 code to study about
# # unpacking python tuple using *
 
# # first and last will be assigned to x and z
# # remaining will be assigned to y
# x, *y, z = (10, "Geeks ", " for ", "Geeks ", 50)
 
# # print details
# print(x)
# print(y)
# print(z)
 
# # first and second will be assigned to x and y
# # remaining will be assigned to z
# x, y, *z = (10, "Geeks ", " for ", "Geeks ", 50)
# print(x)
# print(y)
# print(z)