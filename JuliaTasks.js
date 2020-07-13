







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

// INNER CYCLE

for (let i = 0; i < 4; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str = str + 3 + ' ';
    }
    console.log(str);
}



for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('--------------');  // строка, разделяющая столбцы таблицы умножения
}



for (let i = 1; i <= 20; i+=5) {
    let str = '';
    for (let j = i; j < i + 5; j++) {
        if (j < 10) str = str + j + '  ';  // если число однозначное, то вывести после числа два пробела
        else str = str + j + ' ';          // если число двухзначное, то вывести после числа один пробел
    }
    console.log(str);
}



function numericalTable(n){
    let str = '';
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= 5; j++){
            if(j!==5) str = str + i + ' ';
            else str = str + i;
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTable(n));



function numericalTable(n, m){
    let str = '';
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= m; j++){
            if(j!==m) str = str + i + ' ';
            else str = str + i;
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTable(n));



function numericalTriangle(n){
    let str = '';
    for(let i = 1; i <=n; i++){
        for(let j = 1; j <= i; j++){
            if(j!==i) str = str + i + ' ';
            else str = str + i;
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTriangle(4));



function numericalTriangle(n){
    let str = '';
    for(let i = 1; i <=n; i++){
        for(let j = 1; j <= i; j++){
            str = str + '*';
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTriangle(4));



function sumsInArray(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
            sum = sum + arr[i][j];
        }
        arr1.push(sum)
    }
    return arr1;
}
console.log(sumsInArray([[1, 2], [2, -3], [3, 5], [3, 7]]));



function numericalTriangle(n){
    let str = '';
    for(let i = n; i >=1; i--){
        for(let j = 1; j <= i; j++){
            str = str + '*';
        }
        if(i!==1) str = str + '\n';
    }
    return str;
}
console.log(numericalTriangle(4));



function countLinesWithNegativeElements(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] < 0){
                sum = sum + 1;
                break;
            }
        }
    }
    return sum;
}
console.log(countLinesWithNegativeElements([ [ -1 ], [ 3, -2, 0 ] ]));




/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////




// IF THE NUMBER IS POLIMDROM

function isPalindrome(num) {
    let n =num;
    let str = '';
    while (n > 0) {
        str += n % 10;
        n = Math.trunc(n/10);
    }
    console.log(str, num);
    return (str == num) ? 'Palindrome':'not palindrome';
}
console.log(isPalindrome(12321));



function isPalindrome(num){
    let c = num % 10;
    num = (num - c)/10;
    let b = num % 10;
    let a = (num - b)/10;
    if (c === a){return 'palindrome';
    } else {
        return 'not a palindrome';
    }
}
console.log(isPalindrome(121));




/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////



// https://jsbin.com/qemacuzolo/edit?js,console
// Задача 1: - определите количество простых чисел в диапазоне от m до n
//   Простое число - число, у которого нет делителей, кроме
//   1 и самого числа. Например, 2, 3, 5, 7, 11 - простые числа

//1а) Находим количество делителей числа
function countOfDivisors(n){
    let count = 0;
    for (let i = 1; i < n; i++){
        if (n % i === 0){
            count++;
        }
    }
    return count === 1;
}
console.log(countOfDivisors(5));


//1b) определяем, является ли число простым
function isPrime(num){
    return countOfDivisors(num) === true;
}
console.log(isPrime(2));


//1c) определите все простые числа от 2 до n (включительно)
// и верните их в виде массива
function primeNumbers(n){
    let arr = [];
    for (let i = 2; i <= n; i++){
        if (isPrime(i)) arr.push(i)
    }
    return arr;
}
console.log(primeNumbers(50));


//1d)определите все простые чисела в диапазоне от m до n
function AllPrimeNumbers(n, m){
    let arr1 = [];
    for (let i = n; i <= m; i++){
        if (isPrime(i)) arr1.push(i);
    }
    return arr1;
}

console.log(AllPrimeNumbers(10, 90));


//1e)определите количество простых чисел в диапазоне от m до n
function countOfPrimeNumbers(n, m){
    let count = 0;
    for (let i = n; i <= m; i++){
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
console.log(countOfPrimeNumbers(10, 90));



/////////////////////////////////////////////////////////////////////////////////////////////



// https://jsbin.com/lovixuyuza/edit?js,console
// Задача 1: - определите количество простых чисел в диапазоне от m до n
//   Простое число - число, у которого нет делителей, кроме 1 и самого числа. Например, 2, 3, 5, 7, 11 - простые числа

//1а) Находим количество делителей числа
function countOfDivisors(n){
    let count = 0;
    for (let i = 2; i < (n / 2) + 1; i++){
        if (n % i === 0){
            count++
        }
    }
    return count;
}

//1b) определяем, является ли число простым
function isPrime(num){
    return countOfDivisors(num) === 0;
}
console.log(isPrime(3));

//1c) определите все простые числа от 2 до n (включительно) и верните их в виде массива
function primeNumbers(n){
    let res = [];
    for (let i = 2; i <= n; i++){
        if (isPrime(i)) res.push(i)
    }
    return res;

console.log(primeNumbers(50));

//1d)определите количество простых чисел в диапазоне от m до n
function countOfPrimeNumbers(n, m){
    let count = 0;
    for (let i = n; i <= m; i++){
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
console.log(countOfPrimeNumbers(10, 90));



//Задача 2. Определите количество палиндромов в массиве слов
//2а) удаляем пробелы в строке
function removeSpaces(str){
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' '){
            res = res + str[i]
        }
    }
    return res;
}

//2а*) удаляем пробелы в строке c помощью метода replace
function removeSpaces(str){
    return str.replace(/ /g, '')
}
console.log(removeSpaces("a  b    c"));

//2b) определяем, является ли строка палиндромом
function isPalindrome(str){
    str = str.toLowerCase();
    str = removeSpaces(str)
    let reverseStr = '';
    for (let i = 0; i < str.length; i++){
        reverseStr = str[i] + reverseStr;
    }
    return str === reverseStr;
}
console.log(isPalindrome("Da d"));

//2с) находим количество палиндромов в массиве строк
function countPalindromes(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (isPalindrome(arr[i])){
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}
console.log(countPalindromes(["noon", "nice", "Bob", "Pull up if i pull up", "good"]));



//Задача 3. Имеется массив строк. Найти количество строк в массиве, которые начинаются не содержат гласных букв
//3a) определяем, является ли буква гласной
function isVowel(c){
    c = c.toLowerCase();
    let vowels = 'aeuio';
    for (let i = 0; i < vowels.length; i++){
        if (c == vowels[i]) return true;
    }
    return false
}

//3a*) определяем, является ли буква гласной (с помощью метода includes)
function isVowel(c){
    c = c.toLowerCase();
    let vowels = 'aeuio';
    return vowels.includes(c)
}
console.log(isVowel("b"));

//3b) определяем, содержит ли строка гласные буквы
function containsVowels(str){
    for (let i = 0; i < str.length; i++){
        if (isVowel(str[i])) return true;
    }
    return false;
}
console.log(containsVowels("csb"));

//3с) Находим количество элементов массива, которые не содержат гласных букв
function countOfStingsWithoutVowels(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (!containsVowels(arr[i])) count++
    }
    return count;
}
console.log(countOfStingsWithoutVowels(["js", "sql", "Abc", "java", "pl1", "python"]));



// Задача 4. Дан двухмерный массив (массив, элементами которого являются массивы чисел).
// Вернуть массив, содержащий разность максимального и минимального элемента в каждом из вложенных массивов
//diffInArray([[1,2,3,4], [5,1,8,9], [7,0,4], [41,2,11]]) ---> [3, 8, 3, 39]

// 4а) функция, находящая минимальное значение в массиве
function min(arr){
    let m = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < m){
            m = arr[i];
        }
    }
    return m;
}

// 4b) функция, находящая максимальное значение в массиве
function max(arr){
    let m = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > m){
            m = arr[i];
        }
    }
    return m;
}

// 4с) функция, находящая разность макс. и мин. элементов в массиве
function difference(arr){
    return max(arr) - min(arr)
}

// 4d) функция, находящая разность максимального и минимального элемента
//     в каждом из вложенных массивов исходного двухмерного массива
function diffInArray(arr){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(difference(arr[i]))
    }
    return res;
}
console.log(diffInArray([[1,2,3,4], [5,1,8,9], [7,0,4], [41,2,11]]));



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




