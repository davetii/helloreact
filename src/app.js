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
            <div>
              I am option {this.props.text}
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.onRemoveAll = this.onRemoveAll.bind(this); // preferred method for a bind
    }
    onRemoveAll(e) {
        e.preventDefault();
        console.log(this.props.items);
        //this.props.items = [];

    }
    render() {

        return (
            <div>
                <button onClick={this.onRemoveAll}>Remove All</button>
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
    handlePick() {
        console.log('handle pick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do</button>
            </div>
        );
    }
}

class IndecisionApp extends React.Component {
    render() {
        let items = [1, 2, 3];
        return <div>
            <Header title ="Indecision App" subtitle="I am the subtitle"/>
            <Action />
            <Options items={items}/>
            <AddOption />
        </div>
    };
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));