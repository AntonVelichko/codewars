








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


/*
-------------------------------------------------
||||||||||||||||||||||||||||||||||||||||||||||||||
-------------------------------------------------
*/


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