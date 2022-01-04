factor_1 = 1
palindromes = list()

for i in range(2,1000):
    factor_2 = 1
    for j in range(2,1000):
        num = factor_1 * factor_2
        if str(num) == str(num)[::-1]:
            palindromes.append(num)
        factor_2 += 1
    factor_1 += 1
# print(factor_1, factor_2)
# print(palindromes)
print(max(palindromes))

# factor_1 = 1
# culprit = 0

# for i in range(2,1000):
#     factor_2 = 1
#     for j in range(2,1000):
#         num = factor_1 * factor_2
#         if str(num) == str(num)[::-1]:
#             if culprit < num:
#                 culprit = num
#         factor_2 += 1
#     factor_1 += 1
# # print(factor_1, factor_2)
# print(culprit)