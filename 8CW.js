
//5

// Basic Kata Lessons
// https://www.codewars.com/kata/571edd157e8954bab500032d




// 8 Fuel Calculator
// https://www.codewars.com/kata/57b58827d2a31c57720012e8
function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}




// 8 Convert a Boolean to a String
// https://www.codewars.com/kata/551b4501ac0447318f0009cd
function booleanToString(b){
  return b.toString();
}


function booleanToString(b){
  return b ? 'true' : 'false';
}




// 8 Sum The Strings
// https://www.codewars.com/kata/5966e33c4e686b508700002d
function sumStr(a,b) {
return `${+a + +b}`;
}


function sumStr(a,b) {
  return String(Number(a)+Number(b));
}


function sumStr(a,b) {
  return (+a+ +b)+''
}


sumStr = (a,b) => String(+a + +b);


const sumStr=(a,b)=>1*a+1*b+"";


function sumStr(a,b) {
  return ""+(a- -b)
}




// 8 Discover The Original Price
// https://www.codewars.com/kata/552564a82142d701f5001228
function discoverOriginalPrice(d, s){
return +((d * 100) / (100 - s)).toFixed(2);
}




// 8 Area of a Square
// https://www.codewars.com/kata/5748838ce2fab90b86001b1a
function squareArea(A){
return +Math.pow((2 * A / Math.PI), 2).toFixed(2);
}


function squareArea(A){
  return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100
}




// 8 Basic data types--Boolean and conditional statements if..else
// https://www.codewars.com/kata/571f832f07363d295d001ba8
function trueOrFalse(val){
console.log(val);
  if (val === false || val === 0 || val === null || val === undefined || val.length === 0) return "false";
  else return "true";
}


function trueOrFalse(val){
  return Boolean(val).toString();
}


function trueOrFalse(val){
  return !val ? 'false':'true'
}


trueOrFalse=x=>''+!!x




// 8 Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
var even_or_odd = n => n & 1 ? 'Odd' : 'Even'




// 8 Grasshopper - Debug
// https://www.codewars.com/kata/55cb854deb36f11f130000e1
function weatherInfo(temp) {
  var c = (temp - 32) * (5/9);
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}


function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}


function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}


const weatherInfo = t => `${t = (t - 32) * (5 / 9)} is ${t > 0 ? 'above ': ''}freezing temperature`;


function weatherInfo (temp) {
  const c = (temp - 32) * (5/9);
  return `${c} is ${c > 0 ? 'above ' : ''}freezing temperature`;
}




// 8 Determine offspring sex based on genes XX and XY chromosomes
// https://www.codewars.com/kata/56530b444e831334c0000020
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}


function chromosomeCheck(sperm) {
    if(sperm == "XY")
    {
        return "Congratulations! You're going to have a son.";
    }
    return "Congratulations! You're going to have a daughter.";
}




// 8 What's the real floor?
// https://www.codewars.com/kata/574b3b1599d8f897470018f6
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}


getRealFloor = n => n <= 0 ? n : n < 13 ? n - 1 : n - 2;


function getRealFloor(n) {
    // Less than 1, return n
    if (n <= 0) return n;
    return n - (n >= 13 ? 2 : 1);
}


function getRealFloor(n) {
    if (n > 14) return n - 2
    if (n > 0) return n - 1
    return n
}




// 8 Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb
const bmi = (w,h) => w / h**2 > 30? "Obese" : w / h**2 <= 18.5 ? "Underweight" : w / h**2 <= 25 ? "Normal" : "Overweight";


function bmi(w,h){
    let b = w / h**2;
    return b > 30? "Obese" : w / h**2 <= 18.5 ? "Underweight" : w / h**2 <= 25 ? "Normal" : "Overweight";
}


const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
    bmi <= 25 ? "Normal" :
        bmi <= 30 ? "Overweight" : "Obese";




// 8 Holiday VI - Shark Pontoon
// https://www.codewars.com/kata/57e921d8b36340f1fd000059
function shark(pd, sd, ys, ss, d)
{
    return d ? ( (pd/ys) < (sd/ss*2) ? 'Alive!' : 'Shark Bait!' ) : ( (pd/ys) < (sd/ss) ? 'Alive!' : 'Shark Bait!' );
}

{
    if(d) {
        ss /=2;
    }
    if((pd/ys) < (sd/ss)){
        return 'Alive!'}
    else return 'Shark Bait!';
}


shark = (pD, sD, yS, sS, d) => yS / pD  > sS / sD / (d ? 2 : 1) ? "Alive!" : "Shark Bait!";


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return sharkDistance/(dolphin?sharkSpeed/2:sharkSpeed) > pontoonDistance/youSpeed ? "Alive!":"Shark Bait!";
}




// 8 Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
const rps = (p1, p2) => {
    if(p1 === p2) {
        return 'Draw!'
    };
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}


rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;


const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    return 'Player 2 won!';
};




// 8 L1: Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038
function setAlarm(e, v){
    return e === true && v === false ? true : false;
}


const setAlarm = (employed, vacation) => employed && !vacation;




// 8 Be Concise I - The Ternary Operator
// https://www.codewars.com/kata/56f3f6a82010832b02000f38
const describeAge=a=>{i="You're a(n) ";
return a<=12?i+"kid":a >=13&&a<=17?i+"teenager":a >=18&&a<=64?i+"adult":i+"elderly";}; // (107)


function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}


var describeAge=a=>`You're a(n) ${a<13?"kid":a<18?"teenager":a<65?"adult":"elderly"}`;




// 8 101 Dalmatians - squash the bugs, not the dogs!
// https://www.codewars.com/kata/56f6919a6b88de18ff000b36
const howManyDalmatians = n => {
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    return n <= 10 ? dogs[0] :
        n <= 50 ? dogs[1] :
            n === 101 ? dogs[3] :
                dogs[2];
}


const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = number  => number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));


function howManyDalmatians (number) {
    let dogs = [
        'Hardly any',
        'More than a handful!',
        'Woah that\'s a lot of dogs!',
        '101 DALMATIANS!!!'
    ]
    let respond = number <= 10 ? dogs[0]
        : number <= 50 ? dogs[1]
            : number == 101 ? dogs[3]
                : dogs[2]
    return respond
}


const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = (n) => {
    return n <= 10   ? dogs[0]
        : n <= 50   ? dogs[1]
            : n === 101 ? dogs[3] : dogs[2];
};




// 8 Do I get a bonus?
// https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}


const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;




// 8 Get Planet Name By ID
// https://www.codewars.com/kata/515e188a311df01cba000003
function getPlanetName(id){
  switch(id){
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
    default:
      return "invalid planet id in function getPlanetName()";
  }
}


function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}


function getPlanetName(id){
  var name = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  };

  return name[id];
}


const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];




// 8 No zeros for heros
// https://www.codewars.com/kata/570a6a46455d08ff8d001002
function noBoringZeros(n) {
  while(n%10===0 && n!=0){n/=10;}
  return n;
}


function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}


const noBoringZeros = (n) => +`${n}`.replace(/0+$/, '')


function noBoringZeros(n) {
  return (n===0) ? 0 : n.toString().replace(/0+$/,'');

}


function noBoringZeros(x) {
  let a = `${x}`.split('');
  for(let i = a.length -1; i >= 0; i--){
    if (a[i] == 0){
        a.pop()
    }else{
        break
    }
  }
return Number(a.join(''))
}




// 8 For Twins: 2. Math operations
// https://www.codewars.com/kata/59c287b16bddd291c700009a
function iceBrickVolume(radius, bottleLength, rimLength) {
return Math.round(((radius/2 ** 0.5) * 2) ** 2 * (bottleLength - rimLength));
}


const iceBrickVolume = (radius, bottleLength, rimLength) => radius * radius * (bottleLength - rimLength) * 2;




// 8 Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014

const otherAngle = (a, b) => 180 - a - b;


function otherAngle(a, b) {
  return 180 - (a|0) - (b|0);
}




//8 I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(n) {
if(n%6 === 1){ return "I love you";}
else if(n%6 === 2){ return "a little";}
else if(n%6 === 3){ return "a lot";}
else if(n%6 === 4){ return "passionately";}
else if(n%6 === 5){ return "madly";}
else{return "not at all";}
}


const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]
function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length]
}


function howMuchILoveYou(nbPetals) {
    var petalMap = {
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    };
    return petalMap[nbPetals % 6];
}


function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}


function howMuchILoveYou(nbPetals) {
    var i =nbPetals%6;
    console.log(i);
    if (i==1) return 'I love you';
    else if (i==2) return 'a little';
    else if (i==3) return 'a lot';
    else if (i==4) return 'passionately';
    else if (i==5) return 'madly';
    else if (i==0) return 'not at all';
}


const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]


howMuchILoveYou = n => ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(n - 1) % 6]




// 8 Beginner Series #2 Clock
// https://www.codewars.com/kata/beginner-series-number-2-clock
function past(h, m, s){
console.log([h,m,s]);
s = s * 1000;
m = m * 60 * 1000;
h = h * 60 * 60 * 1000;
return h + m + s;
}
console.log([h,m,s]);


function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}


const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);


past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;


const past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;


function past(h, m, s){
    return (h * 3.6e+6) + (m * 60000) + (s * 1000);
  }




// 8 Find the Slope
// https://www.codewars.com/kata/find-the-slope
function slope(points){
console.log(points);
let a = (points[3] - points[1]) / (points[2] - points[0]);
if (a  < 1000 && a > -1000) return a.toString();
else return 'undefined';
}


function slope(points){
if(points[2] - points[0] === 0) return 'undefined';
else return ((points[3] - points[1]) / (points[2] - points[0])).toString();
}


const slope = points => points[2] - points[0] === 0 ?
      'undefined' : ((points[3] - points[1]) / (points[2] - points[0])).toString();


const slope = points => points[2] == points[0] ? "undefined" : (points[3] - points[1]) / (points[2] - points[0]) + "";


let slope = ([a, b, c, d]) => a == c ? "undefined" : "" + ((b - d) / (a - c));
// Conditional (ternary) operator


function slope(points){
var y = points[3] - points[1];
var x = points[2] - points[0];
if (x==0){return String(undefined);}
return String(y/x);
}


function slope(points)
{
let result = (points[3] - points[1]) / (points[2]-points[0]);
if (isNaN(result) || result === Infinity || result === -Infinity)
  {return 'undefined'}
    else {return String((points[3] - points[1]) / (points[2]-points[0]))};




// 8 Miles per gallon to kilometers per liter
// https://www.codewars.com/kata/557b5e0bddf29d861400005d
function converter (mpg) {
let kpl =  (mpg * 1.609344) / 4.54609188;
return +kpl.toFixed(2);
}


function converter (mpg) {
  return +(mpg * 1.609344 / 4.54609188).toFixed(2);
}




//8 A wolf in sheep's clothing
//
function warnTheSheep(queue) {
let l = queue.length;
let w = queue.indexOf('wolf');
if(l === w + 1) return 'Pls go away and stop eating my sheep';
return `Oi! Sheep number ${l - w - 1}! You are about to be eaten by a wolf!`;
}




// 8 Draw stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n) {
    let s = '';
    for(let i = 1; i <= n; i++){
        if(i === n){s += 'I';}
        else{s += 'I\n' + ' '.repeat(i);}
    }
    return s;
}
console.log(drawStairs(7));


function drawStairs(n) {
    let s = '';
    for(let i = 1; i <= n; i++){
        s += i === n ? 'I' : 'I\n' + ' '.repeat(i)
    }
    return s;
}
console.log(drawStairs(7));


function drawStairs(n) {
    let s = '';
    for(let i = 1; i <= n; i++){
        if(i === n){s += 'I';}
        else{s += 'I\n' + ' '.repeat(i);}
    }
    console.log(s);
    return s;
}
console.log(drawStairs(7));