'use strict';

console.log("app.js is running");

// jsx = Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var options = app.options[randomNumber];
    console.log(randomNumber);
};

var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            'count: ',
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length < 1, onClick: onMakeDecision },
            'What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (n) {
                return React.createElement(
                    'li',
                    { key: n },
                    'number: ',
                    n
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Options'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
