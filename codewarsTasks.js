








// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arr) {
    let c = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === true) c+=1;
    }
    return c;
}


function countSheeps(arr) {
    return arr.filter(Boolean).length;
}





// https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

function solve(a, b) {
    let a1 = 0, a2 = 0, a3 = 0, b1 = 0, b2 = 0, b3 = 0;
    a[0] > b[0] ? a1+=1 : a[0] < b[0] ? b1+=1 : 0;
    a[1] > b[1] ? a1+=1 : a[1] < b[1] ? b1+=1 : 0;
    a[2] > b[2] ? a1+=1 : a[2] < b[2] ? b1+=1 : 0;

    let aa = a1+a2+a3;
    let bb = b1+b2+b3;

    return aa > bb ? `${aa}, ${bb}: Alice made "Kurt" proud!` : aa < bb ?
        `${aa}, ${bb}: Bob made "Jeff" proud!` : `${aa}, ${bb}: that looks like a "draw"! Rock on!`;
}


function solve(a, b) {
    let [x, y] = [0,0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) x++;
        else if (a[i] < b[i]) y++;
    }
    if (x > y) return `${x}, ${y}: Alice made "Kurt" proud!`;
    else if (x < y) return `${x}, ${y}: Bob made "Jeff" proud!`;
    else return `${x}, ${y}: that looks like a "draw"! Rock on!`;





// https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

function solve(a, b) {
    let a1 = 0, a2 = 0, a3 = 0, b1 = 0, b2 = 0, b3 = 0;
    a[0] > b[0] ? a1+=1 : a[0] < b[0] ? b1+=1 : 0;
    a[1] > b[1] ? a1+=1 : a[1] < b[1] ? b1+=1 : 0;
    a[2] > b[2] ? a1+=1 : a[2] < b[2] ? b1+=1 : 0;

    let aa = a1+a2+a3;
    let bb = b1+b2+b3;

    return aa > bb ? `${aa}, ${bb}: Alice made "Kurt" proud!` : aa < bb ?
        `${aa}, ${bb}: Bob made "Jeff" proud!` : `${aa}, ${bb}: that looks like a "draw"! Rock on!`;
}



function solve(a, b) {
    let [x, y] = [0,0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) x++;
        else if (a[i] < b[i]) y++;
    }
    if (x > y) return `${x}, ${y}: Alice made "Kurt" proud!`;
    else if (x < y) return `${x}, ${y}: Bob made "Jeff" proud!`;
    else return `${x}, ${y}: that looks like a "draw"! Rock on!`;





// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions/javascript

function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length; i++){
        if( arr[i] - arr[i-1] !== 1 && isNaN(arr[i-1]) === false ) return arr[i];
    }
    return null;
}


function firstNonConsecutive (arr) {
    console.log(arr);
    for(let i = 0; i < arr.length-1; i++){
        if((arr[i+1] - arr[i]) !== 1) { return arr[i+1]}
    }
    return null;
}


function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    return null
}


function firstNonConsecutive(arr){
    var out = null;
    for(var i = 1; i < arr.length; i++){
        if((arr[i] - arr[i - 1]) != 1){
            out = arr[i];
            break;
        }
    }
    return out;
}




// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(arr) {
let count = 0;
for(let i = 0; i < arr.length; i++){
if(arr[i][0] > arr[i][2]) count+=3;
if(arr[i][0] < arr[i][2]) count+=0;
if(arr[i][0] === arr[i][2]) count+=1;
}
return count;
}

//---

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//---

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}





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