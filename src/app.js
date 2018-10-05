console.log("app.js is running");

// jsx = Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value= '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = ()  => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const options = app.options[randomNumber];
  console.log(randomNumber);
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Options' : 'No Options'}</p>
        <p>count: {app.options.length}</p>
        <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should i do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {
                app.options.map((n) => {
                    return <li key={n}>number: {n}</li>;
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Options</button>
        </form>

    </div>;
    ReactDOM.render(template, appRoot);
};

render();




