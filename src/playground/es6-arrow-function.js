console.log('es6 arrow function');

const sqr = function(x) {
    return x *x;
}
console.log("old style: " + sqr(8));

const sqrArrow = (x) => { return x * x;}
const sqrArrow2 = (x) => x * x;
const parseLastName = (x) => x.split(" ")[1];
console.log("square const: " + sqrArrow(9));
console.log("square2 const: " + sqrArrow2(4));
console.log(parseLastName("Dave Turner"));

const user = {name: 'Dave Turner',
    locations: ['Aiea', 'Sterling Heights', 'Harrison Township']

};



