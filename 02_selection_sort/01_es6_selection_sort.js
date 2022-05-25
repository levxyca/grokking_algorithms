// Selection Sort - O(n^2)
// Parameter:
//  1. random array

// 1. Finds the smallest value in an array

/* Function Expression com Arrow Function
* É criada a partir da declaração de uma variável, na qual assinalamos uma função. 
* Esta função pode ser anônima ou nomeada. A mesma poderá ser *  ativada através da variável assinalada.
* Function Expressions apenas serão definidas no momento da execução
*/
const findSmallestIndex = (array) => {
  let smallestElement = array[0]; // Stores the smallest value
  let smallestIndex = 0; // Stores the index of the smallest value

  // para i de i até tamanho do array faça
  for (let i = 1; i < array.length; i++) {
    // se array[i] for menor do que smallestElement
    if (array[i] < smallestElement) {
      smallestElement = array[i]; // smallestElement recebe array[i]
      smallestIndex = i; //smallestIndex recebe o índice i
    }
  }

  // retorna o menor valor
  return smallestIndex;
};

// 2. Sorts the array
/* Function Expression com Arrow Function
*/
const selectionSort = (array) => {
  //Copy values from array, because it must be immutable. Without that after call selectionSort origin array will become empty.
  /* Operador spread - PARÂMETRO REST
  * É possível declararmos uma parâmetro utilizando ... na frente do mesmo. 
  * Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
  * Cria uma cópia do array
  */
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortingArray.length;

  for (let i = 0; i < length; i++) {
    // Finds the smallest element in the given array
    const smallestIndex = findSmallestIndex(sortingArray);
    // Adds the smallest element to new array
    sortedArray.push(sortingArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};

const array = [5, 3, 6, 2, 10];
console.log(selectionSort(array)); // [2, 3, 5, 6, 10]
console.log(array); // [5, 3, 6, 2, 10]
