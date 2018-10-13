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
    constructor(props) {
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
        this.state = { error: undefined };
    }

    onAddOption(e) {
        e.preventDefault();
        const error = this.props.onAddOption(e.target.option.value.trim());
        e.target.option.value = '';
        this.setState(() => {
           return { error }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Options</button>
                </form>
                {this.state.error}
            </div>
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
        this.onAddOption = this.onAddOption.bind(this);
        this.state = { items : [] }
    }

    handleDeleteOptions() {
        this.setState(() => { return { items: []}; });
    }

    onPick() {
        alert(this.state.items[2]);
    }

    onAddOption(item) {
        if(!item) { return 'Enter valid item' }
        if(this.state.items.indexOf(item) > -1) { return 'Item already exists' }
        this.setState((prevState) => {
           return {
               items: prevState.items.concat(item)
           }
        });
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
            <AddOption onAddOption = {this.onAddOption}/>
        </div>
    };
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));