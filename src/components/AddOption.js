import React from 'react';
export default class AddOption extends React.Component {
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

