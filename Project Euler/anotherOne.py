coins = [int(item) for item in input("Enter the coins: ").split(" ")]
goal = 8
takes = []
all_takes = []
sum = 0

for i in coins:
    sum += i
    if sum <= goal:
        takes.append(i)
        if sum == goal and takes not in all_takes:
            all_takes.append(takes)
            take = []
            sum = 0
    else:
        continue
    for j in coins:
        sum += j
        if sum <= goal:
            takes.append(j)
            if sum == goal and takes not in all_takes:
                all_takes.append(takes)
                take = [] 
                sum = 0
        else:
            continue        
        for k in coins:
            sum += k
            if sum <= goal:
                takes.append(k)
                if sum == goal and takes not in all_takes:
                    all_takes.append(takes)
                    take = []
                    sum = 0
            else:
                continue
print(len(all_takes))