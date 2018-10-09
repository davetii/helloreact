let showDetails = false;
function handleDetailsView() {
    showDetails = !showDetails;
    render();
};
const appRoot = document.getElementById('app');
const render = () => {
    const template =
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={handleDetailsView}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            {showDetails && ( <div>I am the details</div> )}
        </div>
    ReactDOM.render(template, appRoot);
};

render();

