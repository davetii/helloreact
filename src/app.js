const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = { title: 'My default Title', subtitle: 'My default Subtite' }

const Option = (props) => {
    return (
        <div>{props.text}</div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.items.map((o) => <Option text={o} />)
            }
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.onPick}
                disabled={!props.hasOptions}
            >
                What should I do
            </button>
        </div>
    );
};

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
            <Header />
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