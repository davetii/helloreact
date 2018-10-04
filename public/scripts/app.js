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

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Unknown'
    ),
    user.age > 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    determineLocation(user.locale)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
