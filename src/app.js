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
    render() {

        return (
            <div>
                {
                    this.props.options.map((option) => <Option text={option} />)
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>I AddOption</div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do</button>
            </div>
        );
    }
}

class IndecisionApp extends React.Component {
    render() {
        let options = [1, 2, 3];
        return <div>
            <Header title ="Indecision App" subtitle="I am the subtitle"/>
            <Action />
            <Options options={options}/>
            <AddOption />
        </div>
    };
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);