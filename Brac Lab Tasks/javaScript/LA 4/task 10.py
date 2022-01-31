lst = ["hey", "there", " huh ", "what's", " ", "up", " ", "?"]

for i in lst:
    if i.strip() == "":
        lst.remove(i)
    else:
        lst[lst.index(i)] = i.strip()
# for i in lst:
#     if i in "           ":
#         lst.remove(i)
print(lst)