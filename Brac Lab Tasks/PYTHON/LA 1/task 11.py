mark = int(input("Enter the mark: "))

if mark > 100 or mark < 0:
    print("Incorret number")
elif mark >= 90:
    print("A")
elif mark >= 80 and mark <= 89:
    print("B")
elif mark >= 70 and mark <= 79:
    print("C")
elif mark >= 60 and mark <= 69:
    print("D")
elif mark >= 50 and mark <= 59:
    print("E")
else:
    print("F")