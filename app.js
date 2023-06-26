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

// Zadanie 3: Liczba wystąpień elementu w tablicy

// Stwórz funkcję "countOccurrences" za pomocą przypisania funkcji anonimowej do zmiennej,
// która przyjmuje dwa argumenty: tablicę "array" oraz wartość "element". Funkcja powinna zwracać liczbę wystąpień "element" w tablicy "array".
// Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia,
// czy element tablicy zgadza się z podaną wartością.

// Przykład użycia: countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"); // zwraca 2

const countOccurrences = (array, element) => {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
};

countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana");

//ex 4

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

for (i = 0; i < array.length; i++) {
  count += array[i];
}

console.log(count);

//ex 5

const func = function (...args) {
  console.log(...args);
};

func("1", 2222, "heeeyyooo");

//ex 6

const addAllWords = function (...words) {
  let txt = "";
  //   for (i = 0; i < words.length; i++) {
  //     txt += words[i];
  words.forEach((word, index) => {
    if (index === words.length - 1) {
      txt += word;
    } else {
      txt += `${word}-`;
    }
  });
  console.log(txt);
};

addAllWords("ja", "ty", 2, "Gdańsk");

//ex 7

function showUsers(owner, ...others) {
  console.log(
    `Na imprezie był ${owner} ${
      others.length ? `oraz ${others}` : "i tylko on"
    }`
  );
}

showUsers("Marcin", "adam", "ewa", "kuba", "jacek");
showUsers("Marcin");

const colors = ["white", "black", "yellow", "green", "red", "purple", "blue"];

for (color of colors) {
  if (color === "red") {
    console.log(color);
  }
}
