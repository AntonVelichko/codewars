

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


//----------------------------------------------------------------------------------


//1b) определяем, является ли число простым
function isPrime(num){
    return countOfDivisors(num) === true;
}
console.log(isPrime(2));


//----------------------------------------------------------------------------------


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


//----------------------------------------------------------------------------------


//1d)определите все простые чисела в диапазоне от m до n
function AllPrimeNumbers(n, m){
    let arr1 = [];
    for (let i = n; i <= m; i++){
        if (isPrime(i)) arr1.push(i);
    }
    return arr1;
}

console.log(AllPrimeNumbers(10, 90));


//----------------------------------------------------------------------------------


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


//////////////////////////////////////////////////////////////////////////////////////////////////////


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


//--------------------------------------------------------------------------------


//1b) определяем, является ли число простым
function isPrime(num){
    return countOfDivisors(num) === 0;
}
console.log(isPrime(3));


//--------------------------------------------------------------------------------


//1c) определите все простые числа от 2 до n (включительно) и верните их в виде массива
    function primeNumbers(n){
    let res = [];
    for (let i = 2; i <= n; i++){
        if (isPrime(i)) res.push(i)
    }
    return res;

    console.log(primeNumbers(50));


//--------------------------------------------------------------------------------


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


/////////////////////////////////////////////////////////////////////////////////////////////////////


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


//--------------------------------------------------------------------------------


//2а*) удаляем пробелы в строке c помощью метода replace
        function removeSpaces(str){
            return str.replace(/ /g, '')
        }
        console.log(removeSpaces("a  b    c"));


//--------------------------------------------------------------------------------


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


//--------------------------------------------------------------------------------


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



/////////////////////////////////////////////////////////////////////////////////////////////////////



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


//--------------------------------------------------------------------------------


//3a*) определяем, является ли буква гласной (с помощью метода includes)
        function isVowel(c){
            c = c.toLowerCase();
            let vowels = 'aeuio';
            return vowels.includes(c)
        }
        console.log(isVowel("b"));


//--------------------------------------------------------------------------------


//3b) определяем, содержит ли строка гласные буквы
        function containsVowels(str){
            for (let i = 0; i < str.length; i++){
                if (isVowel(str[i])) return true;
            }
            return false;
        }
        console.log(containsVowels("csb"));


//--------------------------------------------------------------------------------


//3с) Находим количество элементов массива, которые не содержат гласных букв
        function countOfStingsWithoutVowels(arr){
            let count = 0;
            for (let i = 0; i < arr.length; i++){
                if (!containsVowels(arr[i])) count++
            }
            return count;
        }
        console.log(countOfStingsWithoutVowels(["js", "sql", "Abc", "java", "pl1", "python"]));



/////////////////////////////////////////////////////////////////////////////////////////////////////



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


//--------------------------------------------------------------------------------


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


//--------------------------------------------------------------------------------


// 4с) функция, находящая разность макс. и мин. элементов в массиве
        function difference(arr){
            return max(arr) - min(arr)
        }


//--------------------------------------------------------------------------------


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