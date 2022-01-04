dividers = [i for i in range(1, 21)]
num = 1

while 1 == 1:
    print(num)
    count = 0
    for i in dividers:
        if num%i == 0:
            count += 1
    if count == 20:
        print(num)
        break
    num += 1
    