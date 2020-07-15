



for (let i = 0; i < 4; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str = str + 3 + ' ';
    }
    console.log(str);
}


//////////////////////////////////////////////////////////////////////////////////////////////


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('--------------');  // строка, разделяющая столбцы таблицы умножения
}


//////////////////////////////////////////////////////////////////////////////////////////////


for (let i = 1; i <= 20; i+=5) {
    let str = '';
    for (let j = i; j < i + 5; j++) {
        if (j < 10) str = str + j + '  ';  // если число однозначное, то вывести после числа два пробела
        else str = str + j + ' ';          // если число двухзначное, то вывести после числа один пробел
    }
    console.log(str);
}


//////////////////////////////////////////////////////////////////////////////////////////////


function numericalTable(n){
    let str = '';
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= 5; j++){
            if(j!==5) str = str + i + ' ';
            else str = str + i;
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTable(n));


//////////////////////////////////////////////////////////////////////////////////////////////


function numericalTable(n, m){
    let str = '';
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= m; j++){
            if(j!==m) str = str + i + ' ';
            else str = str + i;
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTable(n));


//////////////////////////////////////////////////////////////////////////////////////////////


function numericalTriangle(n){
    let str = '';
    for(let i = 1; i <=n; i++){
        for(let j = 1; j <= i; j++){
            if(j!==i) str = str + i + ' ';
            else str = str + i;
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTriangle(4));


//////////////////////////////////////////////////////////////////////////////////////////////


function numericalTriangle(n){
    let str = '';
    for(let i = 1; i <=n; i++){
        for(let j = 1; j <= i; j++){
            str = str + '*';
        }
        if(i!==n) str = str + '\n';
    }
    return str;
}
console.log(numericalTriangle(4));


//////////////////////////////////////////////////////////////////////////////////////////////


function sumsInArray(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
            sum = sum + arr[i][j];
        }
        arr1.push(sum)
    }
    return arr1;
}
console.log(sumsInArray([[1, 2], [2, -3], [3, 5], [3, 7]]));


//////////////////////////////////////////////////////////////////////////////////////////////


function numericalTriangle(n){
    let str = '';
    for(let i = n; i >=1; i--){
        for(let j = 1; j <= i; j++){
            str = str + '*';
        }
        if(i!==1) str = str + '\n';
    }
    return str;
}
console.log(numericalTriangle(4));


//////////////////////////////////////////////////////////////////////////////////////////////


function countLinesWithNegativeElements(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] < 0){
                sum = sum + 1;
                break;
            }
        }
    }
    return sum;
}
console.log(countLinesWithNegativeElements([ [ -1 ], [ 3, -2, 0 ] ]));