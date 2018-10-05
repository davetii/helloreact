'use strict';

console.log("app.js is running");

// jsx = Javascript XML
var user = { name: 'Dave', age: 47, locale: 'Hawaii' };
function determineLocation(locale) {
    if (locale) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            locale
        );
    }
}

var count = 0;
var addOne = function addOne() {
    count++;renderCounterApp();
};
var minusOne = function minusOne() {
    count--;renderCounterApp();
};
var reset = function reset() {
    count = 0;renderCounterApp();
};

var appRoot = document.getElementById('app');
var renderCounterApp = function renderCounterApp() {
    var counterUI = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        '\xA0',
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        '\xA0',
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(counterUI, appRoot);
};
renderCounterApp();
