inp = int(input("Enter the number: "))
exam_marks = dict({'Cierra Vega': 175, 'Alden Cantrell': 200, 'Pierre Cox': 190})
recons_dict = dict()

for i in exam_marks:
    if exam_marks[i] >= inp:
        recons_dict[i] = exam_marks[i]

print(recons_dict)