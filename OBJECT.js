

let person = {
  firstName: "Bob",
  lastName: "Jonson",
  age: undefined,
}

console.log(!!person.age); // false
console.log(person.hasOwnProperty('age')); // true
console.log('age' in person); // true

// добавление свойства объекта
person.zity = 'Miami';
person['yobby'] = 'Tennis'
console.log(person);

// перезаписать свойства объекта
person.yobby = 'Soccer';
console.log(person);

// yдаление свойства
delete person.zity;
console.log(person);

// Напечатать ключи (свойства объекта)
for(let key in person){
  console.log(key);
}
console.log('--------------------');

// Напечатать значения свойств:
for(let i in person){
  console.log(person[i]);
}


///////////////////////////////////////////////////////////////////////////////////////////


function isObjectFull(obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            return true;
        }
    }
    return false;
}

let obj = {
    name: "Bob",
    age: undefined,
    city: '',
};

console.log(isObjectFull(obj)); // true

console.log(Object.keys(obj)); // ["name", "age", "city"]
console.log(Object.values(obj)); // ["Bob", undefined, ""]
console.log(Object.entries(obj)); // [["name", "Bob"], ["age", undefined], ["city", ""]]
console.log(Object.keys(obj).length) // 3


if (Object.keys(obj).length === 0){
    console.log('Empty');
} else {
    console.log('Not empty');
}

//--------------------------------------------------

let obj = {
    a: 1,
    b: 2,
};
for (let key in obj){
    console.log(obj[key]);
}

for (let key in obj){
    console.log(key);
}


///////////////////////////////////////////////////////////////////////////////////////////


// Посчитать, сколько раз встречается каждая буква в строке
function countLetters(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '');
    console.log(str);
    let obj = {};
    for (let i = 0; i <str.length; i++){
        if (obj[str[i]]){
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}

console.log(countLetters('I like Javascript and Python'));

//---------------------------------------------

let obj = 'I like Javascript and Python';

function countLetters(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '');
    let obj = {};
    for (let char of str){
        if (obj[char]){
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}
console.log(countLetters(obj));

//--------------------------------------------

function countLetters(str){
    let obj = {};
    let arr = str.replace(/\s/g, '').toLowerCase().split('');
    arr.forEach(el => obj[el] = (obj[el] || 0) + 1);
    return obj;
}

console.log(countLetters('I like Javascript and Python'));


///////////////////////////////////////////////////////////////////////////////////////////


//Найти количество различных слов в строке
function countWords(text){
    text = text.toLowerCase().split(' ')
    console.log(text);
    let words = {};
    for (let el of text) {
        if (words[el]){
            words[el]++;
        } else {
            words[el] = 1;
        }
    }
    return words;  //объект, содержащий слова и количество каждого слова
    return Object.keys(words); // массив из различных слов без дубликатов
    return Object.keys(words).length; //количество различных слов
}
console.log(countWords("Roses are red violets are blue roses and violets are nice"))


///////////////////////////////////////////////////////////////////////////////////////////


// Дана строка s = "five nine eight two four"
// Найти среднее арифметическое чисел в вывести в виде строки(округлить до целого)

function averageStr(str){
    let digits = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    let arr = str.split(' ');
    console.log(arr);
    let sum = 0;
    for (let el of arr){
        sum = sum + digits[el]
    }
    console.log(sum);
    let average = Math.round(sum /arr.length);
    console.log(average);

    for (let i in digits){
        if (digits[i] === average){
            return i
        }
    }
}
let s = "five nine eight two four";
console.log(averageStr(s));


///////////////////////////////////////////////////////////////////////////////////////////


// Задание 7. В прошлом году создан объект person.
// Если у него есть свойство age, добавить к значению свойства 1,
// если свойства нет, создать это свойство со значением 20.

//1 вариант) свойства age нет:
let person = {
  firstName: "Bob",
  lastName: "Jonson",
}
if (person.age){
  person.age++;
} else {
  person.age = 20;
}

console.log(person);

//-----------------------------------------------------------

// //2 вариант) свойство age есть:
let person = {
  firstName: "Bob",
  lastName: "Jonson",
  age: 10
}
if (person.age){
  person.age++;
} else {
  person.age = 20;
}
console.log(person);


///////////////////////////////////////////////////////////////////////////////////////////


// Задание 8. Создать объект со свойствами '0','1','2','3'
// и значениями 'zero', 'one', 'two', 'three'
let words = ['zero', 'one', 'two', 'three'];
let dct = {
  4 : 'four'
}
for (let i = 0; i < words.length; i++){
  dct[i] = words[i];
}

console.log(dct);

let n = 3;
console.log(dct[n]);
console.log(dct['3']);


///////////////////////////////////////////////////////////////////////////////////////////


// Задание 9. Создать объект со свойствами
// 'zero', 'one', 'two', 'three'  и значениями 0,1,2,3
let words = ['zero', 'one', 'two', 'three'];
let dct = {}

for (let i = 0; i < words.length; i++){
  dct[words[i]] = i;
}

console.log(dct);


///////////////////////////////////////////////////////////////////////////////////////////


// Задание 10. Дан номер дня недели. Вернуть название дня недели.
function daysOfWeek(day) {
  let obj = {
    '1': "Monday",
    '2': "Tuesday",
    '3': "Wednesday",
    '4': "Thursday",
    '5': "Friday",
    '6': "Saturday",
    '7': "Sunday"
  }
  if (day in obj) return obj[day];
  else return "Error"
}
console.log(daysOfWeek(5))


///////////////////////////////////////////////////////////////////////////////////////////


// https://www.codewars.com/kata/577ff15ad648a14b780000e7
// Задание 12.Напишите функцию greet, которая принимает параметр
// language и возвращает приветствие на этом языке.
// Если язык не входит в словарь, возвратить Welcome!
function greet(language) {
  let obj = {
	english: 'Welcome',
	czech: 'Vitejte',
	danish: 'Velkomst',
	dutch: 'Welkom',
	estonian: 'Tere tulemast',
	finnish: 'Tervetuloa',
	flemish: 'Welgekomen',
	french: 'Bienvenue',
	german: 'Willkommen',
	irish: 'Failte',
	italian: 'Benvenuto',
	latvian: 'Gaidits',
	lithuanian: 'Laukiamas',
	polish: 'Witamy',
	spanish: 'Bienvenido',
	swedish: 'Valkommen',
	welsh: 'Croeso'
  };
  return language in obj ? obj[language] : 'Welcome';
}

console.log(greet('czech'))