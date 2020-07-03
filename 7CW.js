




// 7 Calculate Two People's Individual Ages
// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1
function getAges(s,d){
console.log(s ,d);
let arr = [];
let a2 = (s - d) / 2;
let a1 = a2 + d;
arr.push(a1);
arr.push(a2);
if(s <= 0 || d <= 0 || s - d < 0){
return null;
} else {return arr;
}
};


function getAges(sum,difference){
  let average = 0;
  if (sum < 0 || difference < 0 || sum - difference < 0) return null;
  else average = (sum - difference) /2;
  return [average+difference, average];
};


const getAges = (sum,difference) => {
const b = (sum - difference) / 2
const a = sum - b
return (
  sum < 0 || difference < 0 || sum < difference ? null : [a, b]
)
}


function getAges(s,d){
  return s<0||d<0||s<d?null:[(s+d)/2,(s-d)/2];
};




// 7 Powers of 3
// https://www.codewars.com/kata/57be674b93687de78c0001d9
const largestPower = n => {
  let k = 0;
  while (3 ** k < n) ++k;
  return --k;




// 7 The wheat/rice and chessboard problem
// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7
function squaresNeeded(grains){
  return Math.ceil(Math.log2(grains+1))
}


squaresNeeded=g=>g?g.toString(2).length:0




// 7 Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum( a,b ){
if(a>b){
let s = 0;
for(let i = b; i <= a; i++){
s+=i;
}
return s;
}
if(a<b){
let s = 0;
for(let i = a; i <= b; i++){
s+=i;
}
return s;
}
if(a===b) return a;
}


const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}




// 7 Breaking chocolate problem
// https://www.codewars.com/kata/534ea96ebb17181947000ada
const breakChocolate = (n, m) => (n < 1 || m < 1) ? 0 : n * m - 1;


var breakChocolate=function(n,m){return n&&m?n*m-1:0};


function  breakChocolate (n, m) {
    return (n === 0 || m === 0)
        ? 0
        : (n * m) - 1
}


const angle = n => (n - 2) * 180;


function angle(n) { return a = ( n - 2 ) * 180 };




// 7 Breaking chocolate problem
// https://www.codewars.com/kata/534ea96ebb17181947000ada
var breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};


var breakChocolate=function(n,m){return n&&m?n*m-1:0};
