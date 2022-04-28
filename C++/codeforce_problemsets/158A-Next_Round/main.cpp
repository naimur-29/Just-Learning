#include <iostream>
#include <string>

using namespace std;

int findParticipants (string a, string b) {
    int count {0};

    for (int i = 0; i < b.length(); i++) {
        // if (b[i] != " " && (stoi(b[i]) > stoi(a[2]))) count++;
        cout << stoi(b[i]) + stoi(a[2]) << endl;
    }
    return count;
}

int main () {

    return 0;
}