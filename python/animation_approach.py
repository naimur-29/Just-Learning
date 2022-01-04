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
        



# animation_randMatrix()
# animation_matrixBuilding('X')
# animation_processing('WELCOME ANIMATION')
# animation_processing_random('RANDOM TEXT ANIMATION')
# sorting_animation(scores)