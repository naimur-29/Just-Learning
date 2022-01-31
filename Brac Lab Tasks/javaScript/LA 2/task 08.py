# for i in range (start, end, difference)
# break = terminate loot completely
# continue = skip to the next Block
# pass = placeholder does nothing


total = 0
count = 0

for i in range (0,10):
    num = int(input("Enter any number: "))

    if num%2 != 0:
        total += num
        count += 1
    else:
        continue

print("Total is", total, "and Average is", total/count)