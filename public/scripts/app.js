"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.text
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.handleDeleteOptions },
                    "Remove All"
                ),
                this.props.items.map(function (o) {
                    return React.createElement(Option, { text: o });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "onAddOption",
        value: function onAddOption(e) {
            alert(e.target.option.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.onAddOption },
                React.createElement("input", { type: "text", name: "option" }),
                React.createElement(
                    "button",
                    null,
                    "Add Options"
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Action = function (_React$Component5) {
    _inherits(Action, _React$Component5);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        onClick: this.props.onPick,
                        disabled: !this.props.hasOptions
                    },
                    "What should I do"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
    _inherits(IndecisionApp, _React$Component6);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this6 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this6.handleDeleteOptions = _this6.handleDeleteOptions.bind(_this6);
        _this6.onPick = _this6.onPick.bind(_this6);
        _this6.state = {
            items: ['thing on1', 'thing 12', 'thing 21']
            //items : []
        };
        return _this6;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { items: [] };
            });
        }
    }, {
        key: "onPick",
        value: function onPick() {
            alert(this.state.items[2]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: "Indecision App", subtitle: "I am the subtitle" }),
                React.createElement(Action, {
                    hasOptions: this.state.items.length > 0,
                    onPick: this.onPick
                }),
                React.createElement(Options, {
                    items: this.state.items,
                    handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
