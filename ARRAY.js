

// Reverse Array
let arr = [2, 4, 6, 8, 10, 12, 14];
let temp;
for(let i = 0; i < arr.length/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);


// 1 - получить массив [0, 1, 2, ...,10]
// с помощью присваивания значений элементам
// const arr = [];
// for (let i = 0; i <= 10; i++){
//   arr[i] = i;
// }
// console.log(arr);
// //DONE
// // -------------------------------------------
// 2 - получить массив [0, 1, 2, ...,10]
// с помощью метода push()
// const arr = [];
// for (let i = 0; i <= 10; i++){
//   arr.push(i)
// }
// console.log(arr);// DONE

// 3 - получить массив [0, 1, 4, 9,...,100]
// const arr = [];
// for (let i = 0; i <= 10; i++){
//   arr.push(i*i)
// }
// console.log(arr);//DONE

// 4 - получить массив [0, 2, 4, 6,...,20]
// const arr = [];
// for (let i = 0; i <= 10; i++){
//   arr.push(i * 2)
// }
// console.log(arr);//DONE

// 5 - получить массив [1, 3, 5, 7,...,31]
// const arr = [];
// for (let i = 1; i <= 31; i = i + 2){
//   arr.push(i)
// }
// console.log(arr);//DONE


// 6 - получить массив [-1,-2, ...,-10]
// const arr = [];
// for (let i = -1; i >= -10; i--) {
//   arr.push(i)
// }
// console.log(arr);//DONE


// 7 - получить массив [1,0,1,0,..., 1,0]
// const arr = [];
// for (let i = 0; i < 10; i++) {
// if (i % 2 === 0) arr[i] = 1;
// if (i % 2 !== 0) arr[i] = 0;
// }

// console.log(arr);//DONE


// 8 - заполнить массив случайными числами

// const arr = [];
// for (let i = 3; i < 8; i++){
//   arr[i] = Math.random(); // [0, 1] 0.99999999
// }
// console.log(arr); //DONE

// //integer
// const arr = [];
// for (let i = 0; i < 100; i++){
//   arr[i] = Math.trunc(Math.random() * 10); // [0, 9]
// }
// console.log(arr);

// const arr = [];
// for (let i = 0; i < 6; i++){
//   arr[i] = Math.trunc(Math.random() * 49) + 1; // [1, 10]
// }
// console.log(arr);

// const arr = [];   
// console.log(0.999999999999 * 26);

// // for (let i = 0; i < 10; i++){
// //   arr[i] = Math.trunc(Math.random() * 26) + 15; // [15, 40]
// // }
// // console.log(arr);

// //[n, m]
// let n = 100;
// let m = 200;
// for (let i = 0; i < 10; i++){
//   arr[i] = Math.trunc(Math.random() * (m - n + 1)) + n ; // [n, m]
// }


// 9. Найти количество положительных элементов arr
// const arr = [2, 0, 18, -2, 23,-12, 15, -4, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > 0) count++
//     }
// console.log (count);//DONE

// 10. Найти количество четных элементов arr
// const arr = [2, 0, 18, -2, 23,-12, 15, -4, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] % 2 === 0)
//     count++
//     }
// console.log (count);//DONE

// // 12. Найти количество положительных элементов кратных 3
// const arr = [2, 0, 18, -2, 23,-12, 15, -4, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > 0 && arr [i] % 3 === 0)
//     count++
// }
// console.log (count);//DONE

// 13. Найти количество чисел в массиве
// const arr = [2, 0, 'a', -2, 'b', 23, 'c', -4, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (typeof arr[i] === 'number')
//     count++
// }
// console.log (count);//DONE


// // 14. Найти количество элементов, являющихся целыми числами
// const arr = [4.12, 0.1, 25, -2, 23, 36.125, -1];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 1 === 0)//у целого числа остаток от деления на единицу равен 0
//       count++
//   }
//     console.log (count)//DONE


// 15. Найти количество элементов, являющихся квадратами целых чисел
// let arr = [4, 0, 25, -2, 23, 36, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (Math.sqrt (arr[i]) % 1 === 0)
//     count++;
// }
//     console.log (count);

//DONE Math.sqrt выводит квадрат, целое число делится на 1 без остатка



// 16. Найти количество пар положительных элементов
// const arr = [4, 2, 25, -2, 23, 36, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//    if (arr[i] > 0 && arr[i+1] > 0)
//       count++
// }
// console.log (count);
//DONE, пара/соседи i и i+1 или i-1

// 17. Найти количество пар элементов с разными знаками
//arr = [4, 2, 25, -2, 23, 36, -1]

// const arr = [4, 2, 25, -2, 23, 36, -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//    if (arr[i] > 0 && arr[i+1] < 0 || (arr[i] < 0 && arr[i+1] > 0)) 
//       count++
// }
// console.log (count);
// DONE проверяем с двух сторон, или


// 18. Найти количество троек элементов упорядоченных по возрастанию
// let arr = [4, 2, 25, -2, 23, 36, -1, 0, 3];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] < arr[i+1] && arr[i+1] < arr[i+2]) {
//     count++;
//   }
// }

// console.log(count); //не уверена не надо ли в другую сторону проверить i-1. i-2...

// // // 19. Найти первый отрицательный элемент и его индекс

// const arr = [4, 2, 25, -2, 23, 3, -6, 10,  -1];
// let index = 0;
// let num = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] < 0){
//     num = arr[i];
//     index = i;
//     break;
//   }
// }
// console.log (index);
// console.log(num); //done, долго не получалось...




// 20. Создайте массив температур по цельсию от 15 до 35
// // Получите массив температур по Фаренгейту
// let arr = [];
// let arr2 =[];
// for (let i = 15; i <=35; i++) {
//   arr.push(i);
//   arr2.push(i * 9/5 +32) //FORMULA CS to FHR
// }
// console.log(arr);
// console.log(arr2);
//DONE




//21 Массив содержит цены в рублях. Получить массив цен в долларах.
// 1 доллар = 80 рублей
// const arr= [300, 580, 268, 1020, 749, 384, 177];
// let arr2 =[];
// for  (let i = 0; i < arr.length; i++) {
//   arr2.push (arr[i]/80)
// }
// console.log(arr2);
// DONE

//22. Дан массив имен пользователей сайта.
// Валидным считается имя длиной не менее 5.Определить количество валидных имен
// Изменить массив так, прибавив в конце коротких имен количество
// // символов "_", чтобы длина имени стала 5.

// let arr = ['Bob', 'Alice', 'Nick', 'Ann', 'Margo', 'Peter'];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i].length >= 5){
//     count++;
//    } else {
//             arr[i] = arr[i] + '_';
//     }
//   }

// console.log(arr);
// console.log(count);

// не знаю как добавить нужное кол-во символов в конец слова, добавляется
//только один, видимо, еще один цикл нужен


//23 Дан массив. Определить, есть ли в массиве хотя один нулевой элемент.
//Ответ получить в виде true или false

// const arr = [4, 2, 25, -2, 0, 23, 3, -6, 10,  -1];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] === 0) count++
// }  {
//    if (count > 0) console.log (true);
//    if (count <= 0)console.log(false);
//    }
// console.log (count); //DONE



//24 Дан массив. Определить, есть ли в массиве элемент, равный сумме своих
// соседей слева и справа. Получить этот элемент или false, если такого элемента нет

// const arr = [4, 2, 5, 3, 1, 4, 5];
// let count = 0;
// let num = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] === (arr[i+1] + arr[i-1])){
//        count++
//        num = arr[i]
//       }
// }
// if (count === 0) console.log(false);
// console.log(num);



//25 Дан массив. Найти сумму и произведение элементов массива
// //Найти среднее арифметическое элементов массива

// const arr = [4, 2, 4, 16, 2, 3, 6, 10,  1]
// let sum = 0;
// let product = 1
// let average = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//     product = product * arr[i];
//     average = sum/arr.length;
//       }
// console.log (sum);
// console.log (product);
// console.log (average);//DONE





//26 Дан массив. Найти сумму и произведение элементов массива
// const arr = [4, 2, -4, 1, 2, 3, -2, 10,  -1];
//   let sum = 0;
//   let product = 1;
//   for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//     product = product * arr[i]; 
//   }
//     console.log (sum)
//     console.log (product)//DONE

// 27 //Получить массив описаний температур в виде строк
//["4 degrees above zero", "1 degree below zero", "zero", ..]

const arr = [4, 2, -4, 1, 0, 2, 3, -2, 10,  -1];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1){
        `${arr[i]} degrees above zero`
    }
    if (arr[i] < 1 && arr[i]!== -1 && arr[i] !==0){
        `${arr[i]} degrees below zero`
    }
    if (arr[i] === 1){
        `${arr[i]} degree above zero`
    }
    if (arr[i] === -1 ){
        `${arr[i]} degree below zero`
    }
    if (arr[i] === 0){
        'zero'
    }
}