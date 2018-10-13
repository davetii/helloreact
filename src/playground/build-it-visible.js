class VisibleToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleDetailsView = this.handleDetailsView.bind(this);
        this.state =  { show: false };
    }

    handleDetailsView() {
        this.setState((currentState) => {
            return {show : !currentState.show}
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleDetailsView}>{this.state.show ? 'Hide Details' : 'Show the fung Details'}</button>
                {this.state.show && ( <div>I am the details</div> )}
            </div>
            )
    }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<VisibleToggle />, appRoot);