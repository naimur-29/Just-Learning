#include <iostream>
#include <vector>
#include <string>

using namespace std;

int engine(int num1, int num2) {
    cout << "sum = " << num1 + num2 << endl;
    cout << "product = " << num1 * num2 << endl;
    cout << "difference = " << num1 - num2 << endl;
}

int main() {
    int num1 {};
    int num2 {};

    cin >> num1;
    cin >> num2;

    cout << engine (num1, num2) << endl;

    cout << "hello world" << endl;

    return 0;
}