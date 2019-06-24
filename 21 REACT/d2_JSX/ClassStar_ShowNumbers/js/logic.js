class App extends React.Component {
    render() {
        return (
            <ShowNumbers/>
        )
    }
}

class ShowNumbers extends React.Component {
    constructor() {
        super();
        this.number = 13;
        this.printNumbers = this.printNumbers.bind(this);
    }

    printNumbers() {
        let numbersStr = "";
        for (let i=0; i<this.number; i++) {
            numbersStr += i + " ";
        }
        document.getElementById('show-numbers').innerHTML = numbersStr;
    }

    render() {
        return (
            <div>
                <button onClick={this.printNumbers}>Show Numbers</button>
                <div id="show-numbers"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);