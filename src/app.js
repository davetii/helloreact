class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}

class Options extends React.Component {
    render() {

        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.items.map((o) => <Option text={o} />)
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    onAddOption(e) { alert( e.target.option.value); }
    render() {
        return (
            <form onSubmit={this.onAddOption}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onPick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do
                </button>
            </div>
        );
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.onPick = this.onPick.bind(this);
        this.state = {
           items : ['thing on1', 'thing 12', 'thing 21']
            //items : []
        }
    }

    handleDeleteOptions() {
        this.setState(() => { return { items: []}; });
    }

    onPick() {
        alert(this.state.items[2]);
    }
    render() {
        return <div>
            <Header title ="Indecision App" subtitle="I am the subtitle"/>
            <Action
                hasOptions={this.state.items.length > 0}
                onPick={this.onPick}
            />
            <Options
                items={this.state.items}
                handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption />
        </div>
    };
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));