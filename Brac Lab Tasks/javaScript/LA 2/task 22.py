## Decimal to Binary:
i = None

while i == i:
    decimal = int(input("\nEnter the decimal number: "))

    if not decimal <= 0:
        binary = ""

        while i == i:
            if decimal == 1:
                binary += str(decimal%2)
                break
            elif decimal == 0:
                binary = "0"
                break
            else:
                binary += str(decimal%2)
            
            decimal //= 2
        binary += " evitisop"

    elif decimal == -0:
        binary = "0"

    else:
        decimal *= -1
        binary = ""

        while i == i:
            if decimal == 1:
                binary += str(decimal%2)
                break
            else:
                binary += str(decimal%2)
                
            decimal //= 2
        binary += " evitegen"

    print("Binary:", binary[::-1])
    switch = input("Run again?\n")
    if switch.lower() == "yes":
        pass
    else:
        break