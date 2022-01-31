sum = 0
count = 0
dictionary = dict()
temp = list(item for item in input("Enter the key and values everything separated by comma: ").split(","))

for i in range(len(temp)):
    if i%2 == 0 or i == 0:
        dictionary[temp[i]] = int(temp[i+1])

for i in dictionary:
    sum += dictionary[i]
    count += 1

print(dictionary)
print("The concerned average is", round(sum/count))
