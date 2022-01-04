matrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]
res = [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1]
]

for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        if j != 0 and j != 5 and matrix[i][j] == 1:
            a, b = i, j
            if matrix[a-1][b] == 1 or matrix[a][b-1] == 1 or matrix[a][b+1] == 1 or matrix[a+1][b] == 1:
                if matrix[a-1][b] == 1: a -= 1
                elif matrix[a][b-1] == 1: b -= 1
                elif matrix[a][b+1] == 1: b += 1
                elif matrix[a+1][b] == 1: a += 1
            else:
                matrix[i][j] = 0

for i in range(len(matrix)):
    print(matrix[i])