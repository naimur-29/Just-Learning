#include <iostream>
#include <string>

using namespace std;

int numOfImplementations () {
    int count {0};
    string num_of_problems {};
    string tmp = "";
    
    cin >> num_of_problems;
    cin.ignore();
    
    for (int i = 0; i < stoi(num_of_problems); i++) {
        getline(cin >> ws, tmp);
        int count_of_1 {0};
        for (int j = 0; j < tmp.length(); j++) {
            if (tmp[j] == '1') count_of_1++;
        }
        if (count_of_1 > 1) count++;
    }
    
    return count;
}

int main () {
    cout << numOfImplementations() << endl;
    
    return 0;
}