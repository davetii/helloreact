class Person {
    constructor(name = 'Default name', age = 20) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello I am ${this.name} my age is ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() { return !!this.major }

    getGreeting() {
        if(this.hasMajor()) {
            return super.getGreeting() + ' my college major is '  + this.major;
        } else {
            return super.getGreeting() + ' I go to college but have NOT yet decided on my major';
        }

    }
}

class Traveller extends Person {
    constructor(name, age, locale) {
        super(name, age);
        this.locale = locale;
    }

    getGreeting() {
        if(!!this.locale) {
            return super.getGreeting() + ' I am from  '  + this.locale;
        } else {
            return super.getGreeting();
        }

    }
}

const p = new Person('Dave Turner', 47);
console.log(p.getGreeting());

const p2 = new Person('Bob Marley', 50);
console.log(p2.getGreeting());

const p3 = new Person();
console.log(p3.getGreeting());

const student1 = new Student('Mary', 'Turner', 'Computer Science');
console.log(student1.getGreeting());

const student2 = new Student('Nathan', 'Turner');
console.log(student2.getGreeting());

const traveller1 = new Traveller('Mary', 'Turner', 'Harrison Township');
console.log(traveller1.getGreeting());

const traveller2 = new Traveller('Nathan', 'Turner');
console.log(traveller2.getGreeting());