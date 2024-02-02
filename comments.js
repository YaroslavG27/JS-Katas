// This function will calculate the energy base on the mass-energy equivalence formula

function calculateEnergy(mass) {
    const speedOfLight = 299792458
    let energy = mass * speedOfLight ** 2
    return energy
}

// is designed to sort an array of numbers in ascending order using the bubble sort algorithm.

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}