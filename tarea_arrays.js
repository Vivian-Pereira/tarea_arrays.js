// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift(); // Saca el primer elemento
    pedido.unshift("bebida"); // Añade "bebida" al inicio
    pedido.push(nombreCliente); // Añade el nombre del cliente al final
    return pedido;
}

// Llamada a la función procesarPedido
const pedido = ["Vivian", "hamburguesa", "papas fritas"];
console.log(procesarPedido(pedido)); // -> ['bebida', 'hamburguesa', 'papas fritas', 'Vivian']


// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero;
        }
    }
    return suma;
}

// Llamada a la función sumarPares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumarPares(numeros)); // -> 20


// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for (let palabra of palabras) {
        if (!palabra.endsWith('a')) {
            return false; // Si alguna palabra no termina con "a", retorna false
        }
    }
    return true; // Todas terminan con "a"
}

// Llamada a la función palabrasTerminanConA
const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); // -> true


// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const index = words.indexOf(word); // Encuentra el índice de la palabra
    if (index === -1) return []; // Si no se encuentra, retorna un array vacío
    return words.slice(index + 1); // Devuelve todas las palabras después del índice encontrado
}

// Llamada a la función buscaPalabras
const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); // El resultado debe ser: ['javascript', 'node']


// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'JavaScript') {
                return [i, j]; // Retorna la posición [fila, columna]
            }
        }
    }
    return [-1, -1]; // Retorna [-1, -1] si no se encuentra
}

// Llamada a la función findJavaScript
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];
const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]


// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualiza el índice del libro con menos páginas
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualiza el índice del libro con más páginas
        }
    }
    return [minIndex, maxIndex]; // Retorna los índices
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]


// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};

