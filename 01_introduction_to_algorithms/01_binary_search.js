/*
Para problemas de busca usamos a *pesquisa binária*.
- A pesquisa binária é um algoritmo.
- Sua entrada é uma lista ordenada de elementos.
- Se o elemento que você procura está na lista, retorna a sua localização, caso contrário, retorna none.
- Elimine metade dos números a cada tentativa.
- Só funciona quando sua lita está ordenada.
*/

'use strict';

function binary_search(list, item) {
  // baixo
  let low = 0;
  // alto
  // *lista.tamanho - 1* pois lista tem x elementos, mas o índice de arrays normalmente começam com 0
  let high = list.length - 1;
  // enquanto ainda não conseguiu chegar a um único elemento
  while (low <= high) {
    // a cada tentativa, testamos para o elemento central
    // meio = (baixo + alto) / 2
    let mid = Math.floor((low + high) / 2);
    // chute = lista[meio]
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      // se o chute for muito alto, você atualizará a variável alto
      high = mid - 1;
    } else {
      // se o chute for muito baixo, você atualizará a variável baixo proporcionamente
      low = mid + 1;
    }
  }
  // o item não existe
  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null
