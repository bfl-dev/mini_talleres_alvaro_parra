// codewars link: https://www.codewars.com/kata/55f95dbb350b7b1239000030/javascript , cuenta: bfl.is.already.taken
function countSel(array) {
    var freqArray = [...new Set(array.map(item => item))]
    .map(num => { 
        return [num, array.filter(item => item === num).length]
    })
    .sort((a,b) => b[1] - a[1]); // se hace una especie de diccionario con el numero y la cantidad de veces que se repite ordenado por repeticion

    return [
        array.length, // la cantidad de numeros
        [...new Set(array.map(item => item))].length, // la cantidad de numeros unicos
        freqArray.filter((arr) => arr[1] == 1).length, // la cantidad de numeros con solo una repeyicion
        [freqArray.filter(item => item[1] === freqArray[0][1]).map(item => item[1]).sort() // los numeros con mayor repeticion ordenados
        ,freqArray[0][1]] // la cantidad de repeticiones del mas repetido
    ]; 
}

