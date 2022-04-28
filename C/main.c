#include<stdio.h>

int main() {
    int num1,num2;
    char op[1];

    printf("Number 1: ");
    scanf("%d", &num1);

    printf("operator: ");
    scanf("%s", &op);

    printf("Number 2: ");
    scanf("%d", &num2);

    if (*op == '+') {
        printf("%d", num1+num2);
    }
    else if (*op == '-') {
        printf("%d",num1-num2);
    }
    else if (*op == '/') {
        printf("%d",num1/num2);
    }
    else if (*op == '*') {
        printf("%d",num1*num2);
    }
    else printf("Invalid input");
    
    return 0;
}