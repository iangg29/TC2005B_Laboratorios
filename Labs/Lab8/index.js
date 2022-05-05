/*
Ian García González
A01706892
Laboratorio 8
Consturcción de Software y Toma de decisiones. [TC2005B]
*/

/**
 * Función 1
 * @param {int} arreglo Initial array.
 * @returns Average of all array values.
 */
const average = arreglo => arreglo.reduce((a, b) => a + b, 0)  / arreglo.length;
console.log(`El promedio de [9, 2, 6, 3, 7, 1, 0, 8] es: ${average([9, 2, 6, 3, 7, 1, 0, 8])}`);

/**
 * Función 2
 * @param {string} text String to inject into output file.
 */
const writeToFile = text => {
    const fs = require("fs");
    fs.writeFileSync("output.txt", text);
}

writeToFile("This is the eight lab of TC2005B class.");

/**
 * Función 3
 * @param {int} array Initial array.
 * @returns Sorted array.
 */
const bubbleSort = array => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

/**
 * Auxiliar function for función 3
 * @param {int} arreglo Initial array.
 */
const printArray = arreglo => {
    let text = "";
    for(let i = 0; i < arreglo.length; ++i){
        text += arreglo[i] + " ";
    }
    console.log(text);
}

let arreglo = [9, 2, 6, 3, 7, 1, 0, 8];
printArray(arreglo);
bubbleSort(arreglo);
printArray(arreglo);