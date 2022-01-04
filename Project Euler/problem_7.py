prime_number_count = 0
num = 1
serial = int(input("Enter the serial of prime number: "))

while 1 == 1:
    count = 0
    for j in range(1, num+1):
        if num%j == 0:
            count += 1     
    if count == 2:
        prime_number_count += 1
        print(num)
    if prime_number_count == serial:
        print(num)
        break
    num += 1