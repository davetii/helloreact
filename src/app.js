console.log("app.js is running");

// jsx = Javascript XML
var user = {name: 'Dave', age: 47, locale: 'Hawaii'}
function determineLocation(locale) {
    if (locale) { return <p>Location: {locale}</p>; }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Unknown'}</h1>
        {user.age > 18 && <p>Age: {user.age}</p>}
        {determineLocation(user.locale)}
    </div>
)

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
