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

// Zadanie 2: Filtracja liczb parzystych

// Zadeklaruj funkcję o nazwie "filterEvenNumbers", która przyjmuje tablicę liczb jako argument i
// zwraca nową tablicę zawierającą tylko liczby parzyste.
//  Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy liczba jest parzysta.

// Przykład użycia: filterEvenNumbers([1, 2, 3, 4, 5, 6]); // zwraca [2, 4, 6]

function filterEvenNumbers(array) {
  let array2 = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array2.push(array[i]);
    }
  }
  return array2;
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);
