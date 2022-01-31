start = 0
sum = 0

print("\tWelcome", name:=input("What's your name?\n"))

while start <= 600:
    if start == 600:
        print(sum)
    elif start%7 == 0 and start%9 == 0:
        sum += start
    else:
        sum = sum
    
    start += 1