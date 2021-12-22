# combining two dictionaries:
dic_1 = {"Harry":15, "Draco":8, "Nevil":19}
dic_2 = {"Ginie":18, "Luna":14}

combined_dic = dic_1
for i in dic_2:
    combined_dic[i] = dic_2[i]
print(combined_dic)