import { add } from './calc';
console.log(add);

//destructuring - ES6
/*
 {
 title:'ddd',
 desc:'fff'
 }
 */

let p = {
    title: 'ddd',
    desc: 'fff'
};


let t = p.title;
let d = p.desc;

//desctructuring

let {title, desc} = p;

