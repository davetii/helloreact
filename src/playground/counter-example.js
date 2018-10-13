class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state =  { count: this.props.counter };
    }

    componentDidMount() {
        const count = JSON.parse(localStorage.getItem('count'));
        if(count) {
            this.setState(() => ({ count }));
        }

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        localStorage.setItem('count', JSON.stringify(this.state.count));
    }

    addOne() {
        this.setState((currentState) => {
            return { count: currentState.count + 1 };
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return { count: prevState.count - 1 };
        });
    }

    onReset() {
        this.setState(() =>  { return {count: 0}; })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.onReset}>reset</button>
            </div>
        )
    }
}
Counter.defaultProps = { counter: 0 }
ReactDOM.render(<Counter />, document.getElementById('app'));
