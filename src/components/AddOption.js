import React from 'react';
export default class AddOption extends React.Component {
    state = { error: undefined }

    onAddOption = (e) => {
        e.preventDefault();
        const error = this.props.onAddOption(e.target.option.value.trim());
        e.target.option.value = '';
        this.setState(() => ({error}));
    };

    render() {
        return (
            <div className="add-option">
                <form onSubmit={this.onAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Options</button>
                </form>
                <p className="widget__message">{this.state.error}</p>
            </div>
        );
    }
}

