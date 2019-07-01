class App extends React.Component {
    constructor() {
        super();
        this.checkBoxes = this.checkBoxes.bind(this);
        this.state = {
            isRead: false,
            isAgreed: false,
        }
    }


    checkBoxes(propName, propValue) {
        let newStateObj = {};
        newStateObj[propName] = propValue;
        this.setState(newStateObj);
    }
    
    render() {
        return (
            <div className="main">
                <h4>Terms lorem ipsum</h4>
                <Checkbox id="isRead" handleCheck={this.checkBoxes} />
                <Checkbox id="isAgreed" handleCheck={this.checkBoxes} />
                <button id="btn-next" disabled={this.state.isRead && this.state.isAgreed ? false : true}>Next</button>
            </div>
        )
    }
}

class Checkbox extends React.Component {
    constructor() {
        super();
        this.checkSelf = this.checkSelf.bind(this);
    }
    
    checkSelf(e) {
        let propName = e.target.id;
        let propValue = e.target.checked;
        this.props.handleCheck(propName, propValue);
    }
    
    render() {
        return (
            <input onChange={this.checkSelf} type="checkbox" name="" id={this.props.id}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);