class App extends React.Component {
    constructor() {
        super();
        this.getResult = this.getResult.bind(this);
    }
    
    render() {
        return (
            <div>
                <h1>Calculate Squared Number</h1>
                <label for="number">Enter Number</label>
                <input type="number" id ="number" onBlur={this.getResult}/>
                <p>Result: <span id="display-result"></span></p>
            </div>
        )
    }

    calc(num) {
        return num * num;
    }

    getResult() {
        let numToCalc = parseInt($('#number').val());
        $('#display-result').text(this.calc(numToCalc));
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);