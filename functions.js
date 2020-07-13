



function getSum(n){
    let str = '';
    let sum = 0;
    for(let i = 1; i <= n; i++){
        str += (i === n) ? `${i}` : `${i} + `;
        sum += i;
    }
    return `${str} = ${sum}`;
}
console.log(getSum(8));





function reverse(input){
    const l = input.length;
    for (let i = 0, temp; i <= Math.floor(l/2) - 1; i++){
        temp = input[l - 1 - i];
        input[l - 1 - i] = input[i];
        input[i] = temp
    }
    return input;
}
console.log(reverse([1,2,3,4,5,6]));
console.log(reverse([1,2,3,4,5,]));



function some_func(a)
{
    var swapp;
    var n = a.length-1;
    var x = a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}
console.log(some_func([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

















function noBoringZeros(n){
    let str = n + '';
    let strFinal = '';
    let i = str.length - 1;
    while(str[i] === '0'){
        i--;
    }

    for(let j = 0; j <= i; j++){
        strFinal += str[j];
    }
    return +strFinal;
}
console.log(noBoringZeros(9501000));



function noBoringZeros(num){
    while(num % 10 === 0){
        num /= 10;
    }
    return num;
}
console.log(noBoringZeros(9501000));






function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function minSum(arr){
    const arrOfSums = [];
    for(let i = 0; i < arr.length; i++){
        arrOfSums.push(sum(arr[i]));
    }
    return Math.min(...arrOfSums);
}
console.log(minSum([1,2,3])); // 0 ??






// https://www.codewars.com/kata/remove-the-minimum
function removeSmallest(n) {
    let arr = n.slice();
    let min = Math.min(...n);
    let index = arr.indexOf(min);
    arr.splice(index, 1);
    return arr;
}
console.log(removeSmallest([1,2,3,1]));

function removeSmallest(n) {
    let arr = [...n];
    let min = Math.min(...n);
    let index = arr.indexOf(min);
    arr.splice(index, 1);
    return arr;
}
console.log(removeSmallest([1,2,3,1]));





function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function minSum(arr){
    const arrOfSums = [];
    for(let i = 0; i < arr.length; i++){
        arrOfSums.push(sum(arr[i]));
    }
    return Math.min(...arrOfSums);
}
console.log(minSum([[1,2]);





// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = function(size) {
    let arr = [];
    let a = 0;
    for(let i = 1; i <= size; i++){
        a = a + 1;
        let arrTemp = [];
        for(let j = i; j <= size * a; j = j + a){
            arrTemp.push(j);
        }
        arr.push(arrTemp);
    }
    return arr;
}
console.log(multiplicationTable(3));


const multiplicationTable = function(size) {
    let arr = [];
    for(let i = 1; i <= size; i++){
        let arrTemp = [];
        arr.push(arrTemp);
        for(let j = 1; j <= size; j++){
            arrTemp.push(i * j);
        }
    }
    return arr;
}
console.log(multiplicationTable(3));









// find minimum 3-digit number
// /what if there is no any 3-digit number
function minimum(arr){
    let min = 999;
    let index;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= min && arr[i] > 99){
            min = arr[i];
            index = i;
        }
    }
    return [min, index];
}
const arr = [1000, 32, 45, 6, 45, 6, 99, 10, 4536];
console.log(minimum(arr));




function minimum(arr){
    let min;
    let index;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 99 && arr[i] < 1000){
            min = arr[i];
            index = i;
            break;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min && arr[i] > 99 && arr[i] < 1000){
            min = arr[i];
            index = i;
            break;
        }
    }
    return [min, index];
}
const arr = [1000, 32, 45, 6, 45, 102, 99, 10, 4536];
console.log(minimum(arr));












// https://jsbin.com/xulifudoka/1/edit?js,console

//1 функция hello, которая принимает имя name и возращает
// приветствие:  "Hello" name

// function hello(name){





/////////////////////////////////////////////////////////////////////////////////////////////
//2 функция helloName, которая принимает имя и время дня
// time ("morning", "afternoon", "evening") и возращает
// приветствие:  "Good" + time + name + !

function helloName(name, time){
    if (name === undefined || time === undefined) return 'Error';
    return `Good ${time} ${name}!`;
}

console.log(helloName('Anna', 'day'));
console.log(helloName('Nina'));



/////////////////////////////////////////////////////////////////////////////////////////////
//3 функция mult, которая принимает два числа a, b
// и возвращает произведение этих чисел
// Задайте значения аргументов по умолчанию = 0

function mult(a = 0, b = 0){
    let product = a * b;
    return product;
}
console.log(mult(8,7));
console.log(mult(5));
console.log(mult());



/////////////////////////////////////////////////////////////////////////////////////////////
//4 функция double, которая принимает аргумент num
// и возвращает число увеличенное в 2 раза

function double(num = 0){
    return num * 2;
}

console.log(double());


/////////////////////////////////////////////////////////////////////////////////////////////
//5 функция milesToFeet, которая принимает количество миль
// и переводит мили в футы,  1 миля = 5280 футов


function milesToFeet(miles = 1){
    return miles * 5280;
}


console.log(milesToFeet());


/////////////////////////////////////////////////////////////////////////////////////////////
//6 функция fahrenheitToCelcius для  перевода градусов
// Фаренгейта в градусы Цельсия. Функция принимает значение
// температуры в градусах фаренгейта
// и возвращает температуру в градусах Цельсия
// Для этого нужно от числа градусов фаренгейта отнять 32,
// результат умножить на 5 и затем поделить на 9

function fahrenheitToCelcius(tF){
    return Math.floor((tF - 32) * 5 / 9);
}

console.log(fahrenheitToCelcius(82));


function centuryFromYear(year){
    return Math.ceil(year / 100);  //2020 / 100 = 20.2
}
console.log(centuryFromYear(2020));



// -----------------------------------------------------
//7 функция с именем mealPrice, вычисляющая стоимость обеда
// в ресторане. Функция принимает стоимость заказа price,
// процент чаевых tipPercent
// процент налогов tax percent и возвращает полную
// стоимость заказа

function mealPrice(price, tipPercent, taxPercent){
    return +(price +  price * (tipPercent /100 + taxPercent /100)).toFixed(2);

}
console.log(mealPrice(40,10,10));



// ----------------------------------------------------
//8 функция isPositive, которая принимает аргумент num
// и возвращает число true, если число положительное,
// и false в противном случае

function isPositive(num){
    return num > 0;

}
console.log(isPositive(0));


function five(){
    return "Hello".length;
}

console.log(five());



// ----------------------------------------------------
//9 функция isOdd, которая принимает аргумент num
// и возвращает число true, если число нечетное,
// и false в противном случае

function isOdd(num){
    return num % 2 !== 0;
}

console.log(isOdd(5));



// --------------------------------------------------------------------
//10 функция - миникалькулятор calculator
// принимает два числа a, b и операцию operation (+, -, *, /)
// и возвращает результат выполнения операции над числами или сообщение об
// ошибке в случае некорректной операции или деления на ноль

function calc(a, b, operation){
    switch(operation){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return (b === 0)? "ERROR" : Math.round(a / b);
        case '%': return a % b;
        default: return "ERROR";
    }
}
console.log(calc(8, 6, '/'));



//-----------------------------------------------------------
//11 функция totalPrice принимает цену price.
// Если price >= 300, вы получаете скидку 30%,
// если price >= 200, скидка 20%
// если price >= 100, скидка 10%
// если цена < 100, скидки нет.
// Возвратить стоимость товара с учетом возможной скидки

function totalPrice(price){
    if (price >= 300){
        return price - price * 0.3;
    } else if (price >= 200) {
        return price - price * 0.2;
    } else if (price >= 100) {
        return price * 0.9;
    } else return price;
}
console.log(totalPrice(10));


// --------------------------------------------------------------------
//12 Функция greetings
// принимает два параметра: name и time (in 24h format)
// если 0 <= time < 6  return "Good night, name". // if (time >=0 && time < 6)
// если 7 <= time <11 return "Good morning, name".
// если 12 <= time < 17  return "Good day, name".
// если 18 <= time <23  return "Good evening, name"







// console.log(greetings('Alice', 'morning'));
// ----------------------------------------------------
//13 функция sum, которая принимает число n и
// возвращает 1 + 2 + 3 + ... + n





// ----------------------------------------------
//14 функция factorial, которая принимает число n и
// возвращает 1 * 2 * 3 * ... * n
// если n = 0, вернуть 1





// ----------------------------------------------------
//15 функция characterOfWord принимает строку и число n
// и возвращает cимвол строки с номером n, или сообщение
// "Error", если такого символа нет
function charOfWord(str, n){
    return str[n] ? str[n] : 'Error';
}
console.log(charOfWord('Hello', 1));



function characterOfWord(str, n){
    for(let i = 0; i < str.length - 1; i++){
        if(i === n - 1) return str[i];
    }
    return 'Error';
}
console.log(characterOfWord('Hello', 6));





// ------------------------------------------
//16 функция reverseName принимает строку str и
// выводит ее в обратном порядке
function reverseName(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr = newStr + str[i];
    }
    return newStr
}
console.log(reverseName('Hello'));






// ---------------------------------------------
//17 функция cutString получает строку str и два
// числа n, m и возвращает строку, обрезанную с двух сторон:
// т.е. удалить первые n и последние m символов

function cutString(str, n, m){
    let newStr = '';
    let i = 0;
    for(let i = n; i < str.length - m; i++){
        newStr = newStr + str[i];
    }
    return newStr;
}
console.log(cutString('01234567890', 1, 1));



// --------------------------------------------------------------------
//18 функция firstWord получает строку str, состоящую
// из нескольких слов, разделенных пробелами.
// Вернуть первое слово строки
function firstWord(str){
    let newStr = '';
    let i = 0;
    while(str[i] !== ' '){
        newStr = str[i] + newStr;
        i++;
    }
    return newStr;
}
console.log(firstWord('Hello world'));



function firstWord(str){
    let newStr = '';
    let i = 0;
    while(str[i] !== ' '){
        newStr = str[i++] + newStr;
    }
    return newStr;
}
console.log(firstWord('Hello World!'));



function firstWord (str){
    let newStr = '';
    let i = 0;
    while(str[i] !== ' '){
        newStr = newStr + str[i];
        i++;
    }
    return newStr;
}
console.log(firstWord('Hello world'));



// --------------------------------------------------------------------
//19 функция wordInBox получает слово word и число n
//(ширина рамки) и выводит слово в рамке из "*"
// Например, для слова "summer" и n = 14
// **************
// *   summer   *
// **************
// если n <= длине слова, вернуть "error"

function wordInBox(word, n){
    let str = '';
    let space = (n - word.length - 2) / 2;
    if(n < word.length + 2) return 'Error';
    else return '*'.repeat(n) + '\n' + '*' + ' '.repeat(space) + word + ' '.repeat(space) + '*' + '\n' + '*'.repeat(n);
}
console.log(wordInBox('summer', 8));








// ----------------------------------------------------
//20 функция принимает secondWord(str)строку из 3 слов,
// разделенных пробелами и возвращает второе слово

function secondWord(str){
    let newStr = '';
    let n;
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            n = i + 1;
            break;
        }
    }
    while(str[n] !== ' '){
        newStr = newStr + str[n];
        n++;
    }
    return newStr;
}
console.log(secondWord('Happy New Year'));



// -------------------------------------------------
//21 функция isBalanced, которая принимает строку s,
// содержащую скобки '[',']', проверяет правильность
// расстановки скобок.
// Возвращает 'valid' or 'invalid'

function isBalanced(str){
    let a= 0, b = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '[') a++;
        if(str[i] === ']') b++;
        if(a < b) return 'invalid';
    }
    return a === b ? 'valid' : 'invalid';
}
console.log(isBalanced('[][][[]]')); // valid
console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid
console.log(isBalanced('[[[[]]]][[[]]][[]][][')); // invalid
console.log(isBalanced('[]][[[]]')); // invalid
console.log(isBalanced('][[[]][][')); // invalid




// -------------------------------------------------------
//22 функция splitString принимает строку str
//  и разбивает ее на несколько строк, по 4 символа в строке

function splitString(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        newStr = newStr + str[i];
        if((i + 1) % 4 === 0) newStr = newStr + '\n';
    }
    return newStr;
}

console.log(splitString('123456781234'));






