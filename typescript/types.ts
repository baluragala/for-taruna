/*
 string
 number
 boolean
 undefined
 null
 symbol(ES6)
 object
 Array
 -----
 Void
 Any
 */

let title: string = 'Iphone 6';
let price: number = 123.56;
let stockAvailable: boolean = true;
let variants: Array<string> = ['Gold', 'Rose Gold', 'Gray'];

let anything: any;
anything = 10;
anything = 'balu';
anything = [];
anything = {};


//type inference
let username: string;// = 'Balakrishna';
//username = 20;
username = 'balu';
