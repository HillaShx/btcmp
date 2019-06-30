class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <h1>Which colors?</h1>
                <h4>(disable by clicking)</h4>
                <Button label="blue" />
                <Button label="purple" />
                <Button label="green" />
                <Button label="red" />
                <Button label="pink" />
            </div>
        )
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.disable = this.disable.bind(this);
        this.state = {
            isDisabled: false,
        }
    }

    disable() {
        this.setState(
            {
                isDisabled: true,
            }
        )
    }

    render() {
        return (
            <div onClick={this.disable} className={this.state.isDisabled ? "butn opaque" : "butn"}>{this.props.label}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);