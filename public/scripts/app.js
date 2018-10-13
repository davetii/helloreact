'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = { title: 'My default Title', subtitle: 'My default subtitle' };

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.text,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.onDeleteItem(props.text);
                } },
            'remove item'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.items.map(function (o) {
            return React.createElement(Option, { key: o, text: o,
                onDeleteItem: props.onDeleteItem
            });
        })
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.onPick,
                disabled: !props.hasOptions
            },
            'What should I do'
        )
    );
};

var AddOption = function (_React$Component) {
    _inherits(AddOption, _React$Component);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.onAddOption = _this.onAddOption.bind(_this);
        _this.state = { error: undefined };
        return _this;
    }

    _createClass(AddOption, [{
        key: 'onAddOption',
        value: function onAddOption(e) {
            e.preventDefault();
            var error = this.props.onAddOption(e.target.option.value.trim());
            e.target.option.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.onAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Options'
                    )
                ),
                this.state.error
            );
        }
    }]);

    return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
    _inherits(IndecisionApp, _React$Component2);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
        _this2.onPick = _this2.onPick.bind(_this2);
        _this2.onAddOption = _this2.onAddOption.bind(_this2);
        _this2.onDeleteItem = _this2.onDeleteItem.bind(_this2);
        _this2.state = { items: [] };
        return _this2;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { items: [] };
            });
        }
    }, {
        key: 'onDeleteItem',
        value: function onDeleteItem(itemToRemove) {
            this.setState(function (prevState) {
                return {
                    items: prevState.items.filter(function (item) {
                        return itemToRemove !== item;
                    })
                };
            });
            //console.log('onDeleteOption', item)
        }
    }, {
        key: 'onPick',
        value: function onPick() {
            alert(this.state.items[2]);
        }
    }, {
        key: 'onAddOption',
        value: function onAddOption(item) {
            if (!item) {
                return 'Enter valid item';
            }
            if (this.state.items.indexOf(item) > -1) {
                return 'Item already exists';
            }
            this.setState(function (prevState) {
                return { items: prevState.items.concat(item) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.items.length > 0,
                    onPick: this.onPick
                }),
                React.createElement(Options, {
                    items: this.state.items,
                    handleDeleteOptions: this.handleDeleteOptions,
                    onDeleteItem: this.onDeleteItem
                }),
                React.createElement(AddOption, { onAddOption: this.onAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
