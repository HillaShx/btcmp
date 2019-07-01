class App extends React.Component {
    constructor() {
        super();
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color: "white"
        }
    }

    changeColor(color) {
        this.setState(
            {color: color}
        )
    }

    render() {
        return (
            <div>
                <Button handleClick={this.changeColor} value="blue" label="Blue" />
                <Button handleClick={this.changeColor} value="green" label="Green" />
                <Button handleClick={this.changeColor} value="orange" label="Orange" />
                <div className="box" style={{backgroundColor: this.state.color}}></div>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.extractColor = this.extractColor.bind(this);

    }

    extractColor(e) {
        this.props.handleClick(e.target.value);
    }

    render() {
        return (
            <button onClick={this.extractColor} value={this.props.value}>{this.props.label}</button>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);