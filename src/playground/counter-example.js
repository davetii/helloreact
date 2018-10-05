
let count = 0;
const addOne = () => { count++; renderCounterApp(); }
const minusOne = () => { count--; renderCounterApp();}
const reset = () => { count = 0; renderCounterApp(); }


const appRoot = document.getElementById('app');
const renderCounterApp = () => {
    const counterUI = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            &nbsp;
            <button onClick={minusOne}>-1</button>
            &nbsp;
            <button onClick={reset}>reset</button>
        </div>

    );
    ReactDOM.render(counterUI, appRoot);
}
renderCounterApp();

