


function digits(num){
    let c = num % 10;
    num = (num - c) / 10;
    let b = num % 10;
    let a = (num - b) / 10;
    return a !== b && b !== c && a !== c;
}
console.log(digits(123));



function digits(num){
    let str = String(num);
    let a = +str[0];
    let b = +str[1];
    let c = +str[2];
    return [a, b, c];
}
console.log(digits(122));



// how many days to learn n english words if student learns 5 words per day and increase on 2 words every day
function engWords(n){
    let days = 0;
    let oneDayWords = 5;
    let words = 0;
    while(words < n){
        days = days + 1;
        words = words + oneDayWords;
        oneDayWords += 2;
    }
    return days;
}
console.log(engWords(20));





/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////




// IF THE NUMBER IS POLIMDROM






/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////////////////////////////////////











/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////



// Напишите функцию equalElementsInArray, которая принимает массив чисел arr в качестве аргумента,
// и определяет, есть ли в массиве одинаковые элементы, и если есть, возвращает их в виде массива [element, element].
// Если таких пар несколько, вернуть первую из них
function equalElementsInArray(arr){
    if (arr.length === 0) return [];
    else {
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] === arr[i] && j !== i) return [arr[i], arr[i]];
            };
        };
        return "All elements are different";
    };
};


// Поменяйте местами максимальный и минимальный элементы массива
function changeMaxAndMin(arr){
    let min = arr[0];
    let max = arr[0];
    let mini = 0;
    let maxi = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            mini = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxi = i;
        }
    }
    arr[mini] = max;
    arr[maxi] = min;
    return arr;
};


// Найти кол-во пар элементов с разными знаками
const arr = [4 ,2, 25, -2, 23, 36, -1];
let res = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] * arr[i + 1] < 0){
        res.push([arr[i], arr[i + 1]]);
    }
}
console.log(res);
console.log(res.length);


// Найти имена меньше 5 и изменть имена меньше 5 на '_', чтобы длина имени стала 5
let arr = ['Bob', 'Alice', 'Nick'];
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
        count++;
       }else{
        let miss = 5 - arr[i].length;
        for(let j = 1; j <= miss; j++){
            arr[i] = arr[i] + '_';
        }
    }
}
console.log(count);
console.log(arr);


let arr = ['Bob', 'Alice', 'Nick'];
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
        count++;
    }else{
        let miss = 5 - arr[i].length;
        for(let j = arr[i].length; j < 5; j++){
            arr[i] = arr[i] + '_';
        }
    }
}
console.log(count);
console.log(arr);


    let arr = ['Bob', 'Alice', 'Nick'];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= 5){
            count++;
        }else{
            while(arr[i].length < 5){
                arr[i] = arr[i] + '_';
            }
        }
    }
    console.log(count);
    console.log(arr);


// tasks from course
    function exactlyOneIsEven(a, b, c){
        if(a%2 === 0 && b%2 === 0) return false;
        else if (b%2 === 0 && c%2 === 0) return false;
        else if (a%2 === 0 && c%2===0) return false;
        else if(a%2 !== 0 && c%2!==0 && b%2 !==0) return false;
        else return true;
    }
    console.log(exactlyOneIsEven(-9, -9, 3));


    function onlyOneIsPositive(a, b, c){
        if(a>0 && b>0) return false;
        else if (b>0 && c>0) return false;
        else if (a>0 && c>0) return false;
        else if(a>0 && c>0 && b>0) return false;
        else if(a<0 && c<0 && b<0) return false;
        else return true;
    }


    function areAllDigitsDifferent(num){
        let arr = [];
        let last = 0;
        while (num !== 0){
            last = num %10;
            num = (num - last) / 10
            arr.unshift(last);
        }
        return arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2];
    }




