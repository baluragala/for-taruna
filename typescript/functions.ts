function calculateDiscount(price: number, discount: number): number {
    return price * (discount / 100);
}

let discountValue = calculateDiscount(150, 10);


function calculateDiscount1(price: number, discount: number = 10): number {
    return price * (discount / 100);
}

let discountValue1 = calculateDiscount1(150);


function calculateDiscount2(price: number, discount: number = 10, staffDiscount?: number): number {
    return price * (discount / 100);
}

let discountValue2 = calculateDiscount2(150);

function calculateDiscount3(...args: any[]): number {
    //console.log(args);
    return args[0] * (args[1] / 100);
}

let discountValue3 = calculateDiscount3(150, 15, 200, 234, 444, 11, 22, true, [555, 33], '666', 77);


function save(title: string, desc: string, price: number): void {
    //
    return;
}

// Arrow functions
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//even numbers
let evenNumbers = [];
for (let n of numbers) {
    if (n % 2 == 0) {
        evenNumbers.push(n)
    }
}
console.log(evenNumbers);


let evenNumbers2 = numbers.filter(function (n) {
    return n % 2 == 0;
});

console.log(evenNumbers2);


let evenNumbers3 = numbers.filter((n) => n % 2 == 0);

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

function calculateTotalPrice(price: number, tax: number, discount: number): number {
    let taxPrice = price * (tax / 100);
    let discountPrice = price * (discount / 100);
    let totalPrice = price + taxPrice - discountPrice;
    return totalPrice;
}

let ctp = (price: number, tax: number, discount: number): number => {
    let taxPrice = price * (tax / 100);
    let discountPrice = price * (discount / 100);
    let totalPrice = price + taxPrice - discountPrice;
    return totalPrice;
};


let Person = function (name: string, age: number) {
    this.name = name;
    this.age = age;
    this.print = () => console.log(`Name: ${this.name}, Age: ${this.age}`);
};

let john = new Person('John', 23);
john.print();

