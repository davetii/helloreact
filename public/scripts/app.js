'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Default name';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hello I am ' + this.name + ' my age is ' + this.age;
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            if (this.hasMajor()) {
                return _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getGreeting', this).call(this) + ' my college major is ' + this.major;
            } else {
                return _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getGreeting', this).call(this) + ' I go to college but have NOT yet decided on my major';
            }
        }
    }]);

    return Student;
}(Person);

var Traveller = function (_Person2) {
    _inherits(Traveller, _Person2);

    function Traveller(name, age, locale) {
        _classCallCheck(this, Traveller);

        var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this2.locale = locale;
        return _this2;
    }

    _createClass(Traveller, [{
        key: 'getGreeting',
        value: function getGreeting() {
            if (!!this.locale) {
                return _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this) + ' I am from  ' + this.locale;
            } else {
                return _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this);
            }
        }
    }]);

    return Traveller;
}(Person);

var p = new Person('Dave Turner', 47);
console.log(p.getGreeting());

var p2 = new Person('Bob Marley', 50);
console.log(p2.getGreeting());

var p3 = new Person();
console.log(p3.getGreeting());

var student1 = new Student('Mary', 'Turner', 'Computer Science');
console.log(student1.getGreeting());

var student2 = new Student('Nathan', 'Turner');
console.log(student2.getGreeting());

var traveller1 = new Traveller('Mary', 'Turner', 'Harrison Township');
console.log(traveller1.getGreeting());

var traveller2 = new Traveller('Nathan', 'Turner');
console.log(traveller2.getGreeting());
