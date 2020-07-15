
//1 Напишите функцию, которая принимает массив чисел
// и определяет, есть ли в массиве одинаковые элементы и если есть,
// возвращает их в виде массива [element, element]
// Если таких пар несколько, вернуть первую из них

function equalElementsInArray(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                return [arr[i], arr[j]];
            }
        }
    }
    return (arr.length === 0)? [] : 'All different'
}
console.log(equalElementsInArray([1,2,3,4]));
console.log(equalElementsInArray([1, 5, 2, 8, 8, 3, 14, 7, 3, 5]));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2 Напишите функцию, которая принимает массив чисел arr
// и возвращает все пары одинаковых элементов в виде двумерного массива
// Например, const arr = [2, 1, 5, 9, 6, 4, 6,  1, 5, 6]
// Результат:            [[1, 1], [5, 5], [6, 6]]

function equalElementsPairs(arr){
    let res = [];
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                res.push([arr[i],arr[j]])
            }
        }
    }
    let count = res.length;
    res.push(`Count = ${count}`);
    return res;
}
console.log(equalElementsPairs([2, 1, 5, 9, 6, 4, 1, 5, 6, 1]));


