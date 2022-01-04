limit = int(input("Enter the limit: "))
sum_of_squares = 0
square_of_sum = 0

for i in range(1, limit+1):
    sum_of_squares += i**2
    square_of_sum += i
if square_of_sum**2 > sum_of_squares:
    print(square_of_sum**2 - sum_of_squares) 
else:
    print(sum_of_squares - square_of_sum**2)