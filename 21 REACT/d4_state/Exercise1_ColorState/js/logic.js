class App extends React.Component {
    constructor() {
        super();
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color: "white"
        }
    }

    changeColor(e) {
        this.setState(
            {color: e.target.value}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.changeColor} value="blue">Blue</button>
                <button onClick={this.changeColor} value="green">Green</button>
                <button onClick={this.changeColor} value="orange">Orange</button>
                <div className="box" style={{backgroundColor: this.state.color}}></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);