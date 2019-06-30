class App extends React.Component {
    constructor() {
        super();
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            display: "block",
            btnTxt: "hide"
        }
    }

    toggleVisibility() {
        this.setState(
            {
                display: this.state.display === "block" ? "none" : "block",
                btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleVisibility}>{this.state.btnTxt}</button>
                <div className="box" style={{display: this.state.display, backgroundColor: "yellow"}}></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);