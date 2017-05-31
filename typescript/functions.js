function calculateDiscount(price, discount) {
    return price * (discount / 100);
}
var discountValue = calculateDiscount(150, 10);
function calculateDiscount1(price, discount) {
    if (discount === void 0) { discount = 10; }
    return price * (discount / 100);
}
var discountValue1 = calculateDiscount1(150);
function calculateDiscount2(price, discount, staffDiscount) {
    if (discount === void 0) { discount = 10; }
    return price * (discount / 100);
}
var discountValue2 = calculateDiscount2(150);
function calculateDiscount3() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    //console.log(args);
    return args[0] * (args[1] / 100);
}
var discountValue3 = calculateDiscount3(150, 15, 200, 234, 444, 11, 22, true, [555, 33], '666', 77);
function save(title, desc, price) {
    //
    return;
}
// Arrow functions
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//even numbers
var evenNumbers = [];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    if (n % 2 == 0) {
        evenNumbers.push(n);
    }
}
console.log(evenNumbers);
var evenNumbers2 = numbers.filter(function (n) {
    return n % 2 == 0;
});
console.log(evenNumbers2);
var evenNumbers3 = numbers.filter(function (n) { return n % 2 == 0; });
console.log(evenNumbers3);
/*
 No function keyword
 if a function body has single statement, then implicit return is default
 */
/*
 f() -> single return statement in body
 f() -> single return statement in body with multiple lines of code

 f(1) -> single return statement in body
 f(1) -> single return statement in body with multiple lines of code

 f(1,+) -> single return statement in body
 f(1,+) -> single return statement in body with multiple lines of code

 */
var calculateTotalPrice = function (price, tax, discount) {
    var taxPrice = price * (tax / 100);
    var discountPrice = price * (discount / 100);
    var totalPrice = price + taxPrice - discountPrice;
    return totalPrice;
}
var ctp = function (price, tax, discount) {
    var taxPrice = price * (tax / 100);
    var discountPrice = price * (discount / 100);
    var totalPrice = price + taxPrice - discountPrice;
    return totalPrice;
};
