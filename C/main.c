#include <stdio.h>

const char* grade_identifier (int num) {
    return  num >= 90 ? "A":
            num >= 80 && num <= 89 ? "B":
            num >= 70 && num <= 79 ? "C":
            num >= 60 && num <= 69 ? "D": "F";
}

void main () {
    printf("hello world!\n");

    int arr_of_numbers [10] = {86, 89, 12, 56, 99, 80, 54, 86, 76, 65};
    for (int i = 0; i < sizeof(arr_of_numbers) / sizeof(int); i++) {
        printf("%s\n", grade_identifier(arr_of_numbers[i]));
    }
}