class App extends React.Component {
    constructor() {
        super()
        this.toggleDisable = this.toggleDisable.bind(this);
        this.state = {
            hasProgrammed: true
        }
    }
    
    toggleDisable(value) {
        console.log("yoo");
        this.setState({
            hasProgrammed: !value
        })
    }



    render() {
        return (
            <div className="form">
                <QuestionMaster handleClick={this.toggleDisable} text="Have you programmed before?" name="q1" />
                <Question preSelected={!this.state.hasProgrammed}  text="Have you programmed in Java?" name="q2" />
                <Question preSelected={!this.state.hasProgrammed}  text="Have you programmed in Python?" name="q3" />
            </div>
        )
    }
};

class QuestionMaster extends React.Component {

    constructor() {
        super();
        this.extractValue = this.extractValue.bind(this);
    }

    extractValue(e) {
        console.log(e.target.checked);
        this.props.handleClick(e.target.checked);
        
    }

    render() {
        return (
            <div className="question">
                <h3>{this.props.text}</h3>
                <label htmlFor="yes">Yes</label><input type="radio" name={this.props.name} id="yes" />
                <label htmlFor="no" >No</label><input onClick={this.extractValue} type="radio" name={this.props.name} id="no"/>
            </div>
        )
    }
}

class Question extends React.Component {
    render() {
        return (
            <div className="question">
                <h3>{this.props.text}</h3>
                <label htmlFor="yes">Yes</label><input type="radio" name={this.props.name} id="yes"/>
                <label htmlFor="no">No</label><input type="radio" name={this.props.name} id="no" checked={this.props.preSelected}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);