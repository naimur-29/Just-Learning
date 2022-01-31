# Binary to decimal:
import math

inf = 0

while inf == inf:
    binary_1 = input("\nEnter the binary number: ")
    decimal_1 = 0

    if binary_1.lower() == "no":
        break
    elif int(binary_1) < 0:
        print("Please enter the correct value...")
        continue
    else:
        pass

    for i in range (len(binary_1)-1,-1,-1):
        decimal_1 += (2**i)*int(binary_1[len(binary_1)-1-i])

    binary = ""
    decimal = decimal_1

    while inf == inf:
        if decimal == 1:
            binary += str(decimal%2)
            break
        elif decimal == 0:
            binary = "0"
            break
        else:
            binary += str(decimal%2)
        
        decimal //= 2
    
    if binary_1 == binary[::-1]:    
        print("Decimal Value:", decimal_1)
    else:
        print("Please enter the correct value...")
        continue