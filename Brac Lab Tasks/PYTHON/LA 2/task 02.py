car_name = input("What's your favorate car?\n")
multiplier = int(input("How many times do you wanna see that name?\n"))
engine = 1

while engine > 0:
    if not engine == multiplier + 1:
        print(car_name)
        engine = engine+1
    else:
        break

#another method:
#    name = input("enter the name: ")
#    times = int(input("how many times?: "))
#    print((name + "\n")*times)