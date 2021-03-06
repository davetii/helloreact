import React from 'react';
import Options from "./Options";
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import ItemModal from './ItemModal'

class IndecisionApp extends React.Component {
    state = {
        items : [],
        selectedItem: undefined
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

    onCloseModal = () => {
        this.setState(() => ({
            selectedItem : undefined
        }));
    };

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
        const randomNum = Math.floor(Math.random() * this.state.items.length);
        const item = this.state.items[randomNum];
        this.setState(() => ({
            selectedItem : item
        }));
    }

    onAddOption = (item) => {
        if(!item) { return 'Enter valid item' }
        if(this.state.items.indexOf(item) > -1) { return 'Item already exists' }
        this.setState((prevState) => ({items: prevState.items.concat(item)}));
    }

    render() {
        return <div>
            <Header title="Indecision App"/>
            <div className="container">
                <Action hasOptions={this.state.items.length > 0} onPick={this.onPick} />
                <div className="widget">
                    <Options
                        items={this.state.items}
                        handleDeleteOptions={this.handleDeleteOptions}
                        onDeleteItem = {this.onDeleteItem}
                    />
                    <AddOption onAddOption = {this.onAddOption}/>
                </div>

            </div>
            <ItemModal
                selectedItem = {this.state.selectedItem}
                onCloseModal = {this.onCloseModal}
            />

        </div>
    };
}

export default IndecisionApp;
