work_hour = int(input("Enter the work time in hour: "))

if work_hour <= 40:
    weekly_pay = work_hour*200
else:
    weekly_pay = 8000 + (work_hour - 40)*300

print("Weekly payment is", weekly_pay, "Tk")