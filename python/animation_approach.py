from os import name, system
from time import sleep
import random

def clear():
    if name == 'nt':
        _ = system('cls')
    else:
        _ = system('clear')

def animation_randMatrix():
    matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    elements = [0, 1]
    # print(random.choice(elements))
    while 1 == 1:
        clear()
        for i in matrix:
            for j in range(len(i)):
                i[j] = random.choice(elements)

        for i in matrix:
            for j in i:
                print(j, end=' ')
            print()
        sleep(0.05)

def animation_matrixBuilding(user):
    clear()
    matrix = [
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ']
    ]

    while 1==1:
        for i in range(len(matrix)):
            if i != 0 and i%2 != 0:
                for j in range(len(matrix[i])-1, -1, -1):
                    matrix[i][j] = user
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                    print()
                    sleep(0.05)
            else:
                for j in range(len(matrix[i])):
                    matrix[i][j] = user
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                    print()
                    sleep(0.05)
        for i in range(len(matrix)-1, -1, -1):
            if i == 0 or i%2 == 0:
                for j in range(len(matrix[i])-1, -1, -1):
                    matrix[i][j] = ' '
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                    print()
                    sleep(0.05)
            else:
                for j in range(len(matrix[i])):
                    matrix[i][j] = ' '
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                    print()
                    sleep(0.05)

def animation_processing (user):
    clear()
    sleep(0.5)
    welcome = []
    for i in range(len(user)):
        welcome.append(' ')

    while 1 == 1:
        for j in range(len(user)):
            welcome[j] = user[j]
            clear()
            for k in welcome:
                print(k, end = '')
            print()
            print()
            sleep(0.05)
        sleep(1)
        for j in range(len(welcome)):
            welcome[j] = ' '
            clear()
            for k in welcome:
                print(k, end = '')
            print()
            print()
            sleep(0.05)

def  animation_processing_random(user):
    clear()
    sleep(0.5)
    welcome = []
    choices = []
    length = [item for item in range(len(user))]
    for i in range(len(user)):
        welcome.append(' ')

    while 1 == 1:
        choices.clear()
        for j in range(len(user)):
            while 1 == 1:
                rand_j = random.choice(length)
                if rand_j not in choices:
                    choices.append(rand_j)
                    welcome[rand_j] = user[rand_j]
                    break
            clear()
            for k in welcome:
                print(k, end = '')
            print()
            print()
            sleep(0.001)
        sleep(1)
        for j in range(len(welcome)-1, -1, -1):
            welcome[j] = ' '
            clear()
            for k in welcome:
                print(k, end = '')
            print()
            print()
            # sleep(0.1)

scores = [1, 2, 3, 4, 5 , 6]
# print(scores.index(120))
def sorting_animation(listU):
    while 1 == 1:
        randInd = random.randint(0, len(listU)-1)
        randInd2 = random.randint(0, len(listU)-1)
        num = listU[randInd]
        num2 = listU[randInd2]
        listU[randInd] = num2
        listU[randInd2] = num

        clear()
        print(listU)
        sleep(0.5)
        
def matrix_insideOut():
    matrix = [
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ']
    ]

    while 1 == 1:
        x = int((len(matrix)/2) - 1)
        y = int((len(matrix)/2) + 1)
        for circles in range(int(len(matrix)/2)):
            for i in range(x, y):
                for j in range(x, y):
                    if matrix[i][j] != 0:
                        matrix[i][j] = 0
                        clear()
                        for a in matrix:
                            for b in a:
                                print(b, end=' ')
                            print()
                        sleep(0.001)
            x -= 1 #0
            y += 1 #6
        print()
        x = int((len(matrix)/2) - 1)
        y = int((len(matrix)/2) + 1)
        for circles in range(int(len(matrix)/2)):
            for i in range(x, y):
                for j in range(x, y):
                    if matrix[i][j] == 0:
                        matrix[i][j] = ' '
                        clear()
                        for a in matrix:
                            for b in a:
                                print(b, end=' ')
                            print()
                        sleep(0.001)
            x -= 1
            y += 1
        print()
        # [0, 0, 0, 0, 0, 0],
        # [0, 0, 0, 0, 0, 0],
        # [0, 0, 0, 0, 0, 0],
        # [0, 0, 0, 0, 0, 0],
        # [0, 0, 0, 0, 0, 0],
        # [0, 0, 0, 0, 0, 0]

def matrix_insideOut_2():
    matrix = [
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ']
    ]

    while 1 == 1:
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] != 0:
                    if i != 0 and i != 5:
                        if j == 0 or j == 5:
                            matrix[i][j] = 0
                    else:
                        matrix[i][j] = 0
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                    sleep(0.001)
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] != 0:
                    if i != 0 and i != 5 and i != 4 and i != 1:
                        if j == 1 or j == 4:
                            matrix[i][j] = 0
                    elif i == 1 or i == 4:
                        if j != 0 and j != 5:
                            matrix[i][j] = 0
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                sleep(0.003)
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] != 0:
                    matrix[i][j] = 0
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                sleep(0.005)
        ####       
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    if i != 0 and i != 5:
                        if j == 0 or j == 5:
                            matrix[i][j] = ' '
                    else:
                        matrix[i][j] = ' '
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                    sleep(0.001)
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    if i != 0 and i != 5 and i != 4 and i != 1:
                        if j == 1 or j == 4:
                            matrix[i][j] = ' '
                    elif i == 1 or i == 4:
                        if j != 0 and j != 5:
                            matrix[i][j] = ' '
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                sleep(0.003)
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    matrix[i][j] = ' '
                    clear()
                    for a in matrix:
                        for b in a:
                            print(b, end=' ')
                        print()
                sleep(0.005)

def normal_loading():
    while 1 == 1:
        clear()
        print("   |  ")
        print("   |  ")
        print("   |  ")
        sleep(0.001)
        clear()
        print('    /  ')
        print('   /  ')
        print('  /  ')
        sleep(0.001)
        clear()
        print()
        print('  ---  ')
        print()
        sleep(0.001)
        clear()
        print()
        print('-------')
        print()
        sleep(0.001)
        clear()
        print('  \  ')
        print('   \  ')
        print('    \  ')
        sleep(0.001)
        clear()
        print("   |  ")
        print("   |  ")
        print("   |  ")
        sleep(0.001)


animation_randMatrix()
# animation_matrixBuilding('X')
# animation_processing('WELCOME ANIMATION')
# animation_processing_random('RANDOM TEXT ANIMATION')
# sorting_animation(scores)
# matrix_insideOut()
# matrix_insideOut_2()
# normal_loading()