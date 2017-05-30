var t = 20;
function double(flag) {
    var t; //hoisting
    if (flag == true) {
        t = 200;
        t = t * 2;
    }
    return t;
}
var s = 20; // block level variable
/*
 {
 }
 */
function double1(flag) {
    if (flag == true) {
        var s_1 = 200;
        s_1 = s_1 * 2;
    }
    return s;
}
console.log(double1(false));
var n = 10;
var n = 'balu';
var n1 = 20;
var n1 = 'balu';
