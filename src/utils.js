console.log('utils.js is running');

const square = (n) =>  n *n ;
const add = (n1, n2) =>  n1 + n2;
const subtract = (n1, n2) =>  n1 - n2;
export {
    square, add, subtract as default
}