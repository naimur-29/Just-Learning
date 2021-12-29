from os import system, name
from time import sleep

def clear():
    _ = system('cls')

clear()
for i in range(10,0,-1):
    print(i)
    sleep(1)
    clear()