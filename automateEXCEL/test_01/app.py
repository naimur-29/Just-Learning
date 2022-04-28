from openpyxl import Workbook, load_workbook

workbook = load_workbook("sample.xlsx")

worksheet = workbook["FoodSales"]

order_dates = []
sum = 0
for i in range (2, 246):
    # order_dates.append(worksheet["A"+str(i)].value)
    # sum += worksheet["F" + str(i)].value
    worksheet["I" + str(i)].value = worksheet["E" + str(i)].value
    
workbook.save("sample.xlsx")