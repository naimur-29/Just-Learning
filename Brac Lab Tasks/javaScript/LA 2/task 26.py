start = int(input("Enter the starting range: "))
end = int(input("Enter the ending range: "))
count_prime, count_perfect = 0,0
perfect_num, prime_num = "",""

for i in range (start,end+1):
    count_multiple, sum_multiple = 0,0
    for ii in range (1,i+1):
        if i%ii == 0:
            count_multiple += 1
            if  ii != i:
                sum_multiple += ii
    if count_multiple <= 2:
        count_prime += 1
        prime_num += str(i) + " "
    if sum_multiple == i:
        count_perfect +=1
        perfect_num += str(i) + " "

print("\nBetween", start, "and", end)
print("Found", count_prime, "prime numbers and", count_perfect, "perfect numbers...")
print("Prime numbers are: " + prime_num)
print("Perfect numbers are: " + perfect_num)

