class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Greet/>
            </div>
        )
    }
}


class Greet extends React.Component {
    constructor() {
        super();
        this.displayMsg = this.displayMsg.bind(this);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.displayMsg}>Say Hello</button>
                <div id="greet"></div>
            </div>
        )
    }
    displayMsg() {
        document.getElementById('greet').innerHTML = "Hello World!";
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);