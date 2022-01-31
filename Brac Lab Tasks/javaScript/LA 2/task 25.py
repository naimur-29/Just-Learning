
inf = 0

while inf == inf:
    limit = input("\nEnter how many numbers you want: ")
    product = 1
    
    if limit.lower():
        break
    elif int(limit):
        print("Please enter the correct value...")
        continue
    else:
        print("Enter the numbers:")

        for i in range (int(limit)):
            num = int(input())
            product *= num

        print("The product of those numbers are:", product)