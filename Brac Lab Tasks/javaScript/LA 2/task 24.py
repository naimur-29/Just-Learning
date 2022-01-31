# a_float = 3.14159
# limited_float = round(a_float, 2)
# limited_float_2 = "{:.2f}".format(a_float)

i, count, sum, num_count = 0,0,0,0

while i == i:
    if count == 5:
        print()
        break
    num = int(input("Enter an even number: "))
    if count == 0:
        min = num
    count += 1
    if num%2 == 0:
        sum += num
        num_count += 1
        if num <= min:
            min = num
print("Minumum value is",min, "\nAvarage is", round(sum/num_count,3))