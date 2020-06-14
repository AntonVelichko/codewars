


// https://www.codewars.com/kata/582c81d982a0a65424000201/solutions/javascript
const arrCheck = a => a.every(Array.isArray) ;


//


function countInfinity(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(isFinite(arr[i])) count++;
    }
    return count;
}
console.log(countInfinity([1/0, 1/0]));
console.log(isFinite(1/0));