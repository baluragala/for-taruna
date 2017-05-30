var t = 20;

function double(flag: boolean): number {
    var t; //hoisting
    if (flag == true) {
        t = 200;
        t = t * 2;
    }
    return t;
}


let s = 20; // block level variable
/*
 {
 }
 */
function double1(flag: boolean): number {
    if (flag == true) {
        let s = 200;
        s = s * 2;
    }
    return s;
}

console.log(double1(false));


var n=10;
var n='balu';

let n1=20;
n1=300;
const PI=3.14;
//PI=3.145;
