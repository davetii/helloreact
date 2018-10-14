import React from 'react';
import Options from "./Options";
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'

class IndecisionApp extends React.Component {
    state = { items : [] }

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

    handleDeleteOptions = () => {
        this.setState(() => ({ items: [] }));
    };

    onDeleteItem = (itemToRemove) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((item) => {
                return itemToRemove !== item;
            })
        }));
    }

    onPick = () => {
        alert(this.state.items[2]);
    }

    onAddOption = (item) => {
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

export default IndecisionApp;