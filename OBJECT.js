

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