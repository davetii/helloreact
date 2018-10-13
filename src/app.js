const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = { title: 'My default Title', subtitle: 'My default subtitle' }

const Option = (props) => {
    return (
        <div>
            {props.text}
            <button onClick={(e) => {
                props.onDeleteItem(props.text);
            }}>remove item</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.items.map((o) => (
                    <Option key={o} text={o}
                            onDeleteItem={props.onDeleteItem}
                    />
                ))
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
        this.setState(() => ({error}));
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
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.state = { items : [] }
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'));
        if(items) {
            this.setState(() => ({ items }));
        }

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        if(prevState.items.length != this.state.items.length) {
            localStorage.setItem('items', JSON.stringify(this.state.items));
            console.log('saving data');
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ items: [] }));
    };

    onDeleteItem(itemToRemove) {
        this.setState((prevState) => ({
            items: prevState.items.filter((item) => {
                return itemToRemove !== item;
            })
        }));
    }

    onPick() {
        alert(this.state.items[2]);
    }

    onAddOption(item) {
        if(!item) { return 'Enter valid item' }
        if(this.state.items.indexOf(item) > -1) { return 'Item already exists' }
        this.setState((prevState) => ({items: prevState.items.concat(item)}));
    }

    render() {
        return <div>
            <Header title="Indecion App"/>
            <Action hasOptions={this.state.items.length > 0} onPick={this.onPick} />
            <Options
                items={this.state.items}
                handleDeleteOptions={this.handleDeleteOptions}
                onDeleteItem = {this.onDeleteItem}
            />
            <AddOption onAddOption = {this.onAddOption}/>
        </div>
    };
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));