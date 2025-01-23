#include <iostream>
#include <vector>

int main() {
    int numElements;

    // Prompt user to enter the number of elements
    std::cout << "Enter the number of elements you want to store: ";
    std::cin >> numElements;

    // Create a vector to store the elements
    std::vector<int> dynamicArray;

    // Input the elements from the user and store in the vector
    std::cout << "Enter " << numElements << " elements:" << std::endl;
    for (int i = 0; i < numElements; ++i) {
        int element;
        std::cout << "Element " << i + 1 << ": ";
        std::cin >> element;
        dynamicArray.push_back(element); // Add element to the vector
    }

    // Display the elements in the vector
    std::cout << "\nThe elements in the vector are:" << std::endl;
    for (int i = 0; i < dynamicArray.size(); ++i) {
        std::cout << dynamicArray[i] << " ";
    }
    std::cout << std::endl;

    // Allow user to add a new element
    int newElement;
    std::cout << "\nEnter a new element to add to the vector: ";
    std::cin >> newElement;
    dynamicArray.push_back(newElement);

    // Display the updated vector
    std::cout << "\nThe updated vector is:" << std::endl;
    for (int i = 0; i < dynamicArray.size(); ++i) {
        std::cout << dynamicArray[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
