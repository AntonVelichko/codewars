
// 7 Палиндромы:
// 7.1 Напишите функцию, которая получает имя и выводит
//     его в обратном порядке

function reverse(name){
    let str = '';
    for (let i = 0; i < name.length; i++){
        str = name[i] + str;   //  ecilA
    }
    return [str, str === name];
}
console.log(reverse('wasitacaroracatisaw'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7.3. Напишите функцию isPalindrome, которая принимает строку и определяет,
//     является ли строка палиндромом после удаления из нее всех пробелов
//     Выполните проверку на примере строки: "was it a car or a cat i saw"

function isPalindrome(str){
    let strNoSpace = '';                   // ''
    let strReverse = '';                   // ''
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' '){
            strNoSpace = strNoSpace + str[i];  //pul
            strReverse = str[i] + strReverse;  //lup
        }
    }
    return strNoSpace === strReverse;
}
console.log(isPalindrome("was it a car or a cat i saw")); //true
console.log(isPalindrome("pull up if i pull up")); //true


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 141
function reverse(n){
  let a = n % 10;    //1
  let b = (n - a)/10 % 10;         //4
  let c = (n - b * 10 - a) / 100;  //141 - 40 - 1 = 1
  return a === c
}
console.log(reverse(141));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
