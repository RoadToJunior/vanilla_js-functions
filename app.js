// Zadanie 1: Obliczanie średniej

// Zadeklaruj funkcję o nazwie "calculateAverage", która przyjmuje tablicę liczb jako argument i zwraca średnią arytmetyczną tych liczb.
// Wykorzystaj pętlę for do obliczenia sumy liczb, a następnie podziel tę sumę przez długość tablicy.

// Przykład użycia: calculateAverage([1, 2, 3, 4, 5]); // zwraca 3

function calculateAverage(array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

calculateAverage([1, 2, 3, 4, 5]);
