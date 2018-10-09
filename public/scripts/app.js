'use strict';

var showDetails = false;
function handleDetailsView() {
    showDetails = !showDetails;
    render();
};
var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: handleDetailsView },
            showDetails ? 'Hide Details' : 'Show Details'
        ),
        showDetails && React.createElement(
            'div',
            null,
            'I am the details'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
