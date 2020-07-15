

// https://jsbin.com/lebekuhihe/edit?js,console
//1 Напишите функцию pattern(n, m) которая
// принимает размеры n, m и возвращает строку,
// содержащую узор: (n звездочек в одном ряду, m рядов)
// **********
// **********
// **********
// **********

function pattern(n, m){
let str = '\n';
  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      str = str + '*';
    }
    str = (i === m) ? str : str + '\n';
  }
  return str;
}
console.log(pattern(10, 5));

// --------------------------------------------------

function pattern(n, m){
let str = '';
  for(let i = 1; i <= m; i++){
    str = str + '*'.repeat(n);
    str = (i === m) ? str : str + '\n';
  }
  return str;
}
console.log(pattern(10, 5));


// ----------------------------------------------------


function pattern(n, m){
let str = ('*'.repeat(n) + '\n').repeat(m-1);
str = str + '*'.repeat(n);
  return str;
}
console.log(pattern(10, 5));


////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2Напишите функцию drawTriangle(n) которая
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *
// **
// ***
// ****

function pattern(n){
let str = '';
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
      str = str + '*';
    }
  str = (i === n) ? str : str + '\n';
  }
return str;
}
console.log(pattern(4));


// ------------------------------------------------------


function pattern(n){
let str = '';
  for(let i = 1; i <= n; i++){
    if(i === n) str + '*'.repeat(i);
      str = str + '*'.repeat(i) + '\n';
  }
return str;
}
console.log(pattern(4));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//3 Напишите функцию drawTriangle(n) которая
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *****
// ****
// ***
// **
// *

function pattern(n){
let str = '';
  for(let i = n; i >= 1; i--){
    for(let j = i; j >= 1; j--){
      str = str + '*';
    }
  str = (i === 1) ? str : str + '\n';
  }
return str;
}
console.log(pattern(5));


//-------------------------------------------------------------


function pattern(n){
let str = '';
  for(let i = n; i >= 1; i--){
    if(i === 1) str + '*'.repeat(i);
      str = str + '*'.repeat(i) + '\n';
  }
return str;
}
console.log(pattern(4));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//4 Напишите функцию drawTriangle(n) которая
// принимает ширину треугольника (здесь 7) n и возвращает строку,
// содержащую рисунок:
//     *
//    ***
//   *****
//  *******

function pattern(n){
let str = '';
  for(let i = 1; i <= n; i += 2){
    str += '_'.repeat((n - i) / 2) + '*'.repeat(i) + '_'.repeat((n - i) / 2);
    str = (i === n) ? str : str + '\n';
  }
  return str;
}
console.log(pattern(7));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//5 Напишите функцию, которая принимает количество ступенек n (n = 5)
// и рисует лесенку:
// #
// _#
// __#
// ___#
// ____#

function pattern(n){
let str = '';
  for(let i = 0; i < n; i++){
    str += '_'.repeat(i) + '#';
    str = (i === n - 1) ? str : str + '\n';
  }
return str;
}
console.log(pattern(5));


//-----------------------------------------------------------


function pattern(n){
let str = '';
  for(let i = 1; i <= n; i++){
    for(let j = 1; j < i; j++){
      str += '_';
    }
    str = (i === n) ? str + '#' : str + '#' + '\n';
  }
return str;
}
console.log(pattern(5));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//6 Узор из чисел: (n  чисел в строке, m строк)
// 11111
// 22222
// 33333
// 44444

function pattern(n, m){
let str = '';
  for(let i = 1; i <= m; i++){
    if(i === m) str = str + `${i}`.repeat(n);
    else str += `${i}`.repeat(n) + '\n';
  }
  return str;
}
console.log(pattern(5, 4));


//-------------------------------------------------------


function pattern(n, m){
let str = '';
  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      if(j === n) str += i;
      else str += i;
    }
    if(i === m) str;
    else str += '\n';
  }
  return str;
}
console.log(pattern(5, 4));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//7 Треугольник из чисел (n - количество строк)

// "1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15"


function digitTriangle(n){
  str = '';
  let char = 1;
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
      if( j < i ) str = str + char + ' ';
      else str = str + char;
      char++;
    }
    str = (i === n) ? str : str + '\n';
  }
  return str;
}

console.log(digitTriangle(5));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//8 Walk-down Stairs
// "1 1
// 1 2 2 1
// 1 2 3 3 2 1
// 1 2 3 4 4 3 2 1
// 1 2 3 4 5 5 4 3 2 1
// 1 2 3 4 5 6 6 5 4 3 2 1 "


function stairs(n){
  let str = '';
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
       str = str + j + ' ';
    }
    for(let j = i; j >= 1; j--){
      str = (j !== 1) ? str + j + ' ' : str + j;
    }
    str = (i !== n) ? str + '\n' : str;
  }
  return str;
}

console.log(stairs(6));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//9 Walk-up Stairs

// "
//                                     1 1
//                                 1 2 2 1
//                             1 2 3 3 2 1
//                         1 2 3 4 4 3 2 1
//                     1 2 3 4 5 5 4 3 2 1
//                 1 2 3 4 5 6 6 5 4 3 2 1
//             1 2 3 4 5 6 7 7 6 5 4 3 2 1
//         1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
//     1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1"

// Draw stairs:  https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// Walk-up Stairs https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/

function stairs(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        str = str + ' '.repeat(n * 2 - i * 2);
        for(let j = 1; j <= i; j++){
            if(j > 9) a = j - 10;
            else a = j;
            str = str + a + ' ';
        }
        for(let j = i; j >= 1; j--){
            if(j > 9) a = j - 10;
            else a = j;
            str = (j !== 1) ? str + a + ' ' : str + j;
        }
        str = (i !== n) ? str + '\n' : str;
    }
    return str;
}
console.log(stairs(11));


//--------------------------------------------------


function stairs(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        str = str + ' '.repeat((n * 2 - i * 2) * 2);
        for(let j = 1; j <= i; j++){
            if(j > 9) a = j % 10;
            else a = j;
            str = str + a + ' ';
        }
        for(let j = i; j >= 1; j--){
            if(j > 9) a = j % 10;
            else a = j;
            str = (j !== 1) ? str + a + ' ' : str + j;
        }
        str = (i !== n) ? str + '\n' : str;
    }
    return str;
}
console.log(stairs(30));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//23 функция принимает два числа n, m (например n= 10, m = 5)
// и получает строку рисующую прямоугольник n*m
// a) закрашенный:
// **********
// **********
// **********
// **********
// **********

function paintSquare(n, m){
    let str = '';
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            str = str + '*';
            if(j === n) str = str + '\n';
        }
    }
    return str;
}

console.log(paintSquare(10, 5));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//24 b) незакрашенный:
// **********
// *        *
// *        *
// *        *
// **********

function paintHole(n, m){
    let str = '';
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(i === 1 || i === m) str = str + '*';
            else if(j === 1 || j === n) str = str + '*';
            else str = str + ' ';
            if(j === n && i === m) str = str;
            else if(j === n) str = str + '\n';
        }
    }
    return str;
}

console.log(paintHole(10, 5));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//25 функция triangle принимает нечетное число n
// (например n = 7) и выводит строку
// рисующую треугольник(символы "_" изображают пробелы)
//    ___*___
//    __***__
//    _*****_
//    *******

function triangle(n){
    let str = '';
    for(let i = 1; i <= n; i+=2){
        if(i === n) str = str + '_'.repeat((n - i)/2) + '*'.repeat(i) + '_'.repeat((n - i)/2);
        else str = str + '_'.repeat((n - i)/2) + '*'.repeat(i) + '_'.repeat((n - i)/2) + '\n';
    }
    return str;
}

console.log(triangle(7));


////////////////////////////////////////////////////////////////////////////////////////////////////////


//26 функция принимает нечетное число n (например n = 7)
// и выводит строку рисующую ромб
// (символы "_" изображают пробелы)
//    ___*___
//    __***__
//    _*****_
//    *******
//    _*****_
//    __***__
//    ___*___

function rhombus(n){
    let str = '';
    for(let i = 1; i <= n; i+=2){
        str = str + '_'.repeat((n - i)/2) + '*'.repeat(i) + '_'.repeat((n - i)/2) + '\n';
    }
    for(let i = n; i >= 1; i-=2){
        if(i === n) str;
        else if (i === 1) str = str + '_'.repeat((n - i)/2) + '*'.repeat(i) + '_'.repeat((n - i)/2);
        else str = str + '_'.repeat((n - i)/2) + '*'.repeat(i) + '_'.repeat((n - i)/2) + '\n';
    }

    return str;
}
console.log(rhombus(7));
