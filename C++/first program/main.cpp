#include <iostream>
#include <string>
#include <vector>

using namespace std;

int positive_sum (const vector<int> arr){
	int sum {};
	for (int i : arr) {
		if (i >= 0) {
			sum += i;
		}
  }
  return sum;
}

int main() {
	cout << "the sum of positive nums is: " 
  << positive_sum(std::vector <int> {1,-2,3,4,5}) 
  << endl;

  return 0;
}