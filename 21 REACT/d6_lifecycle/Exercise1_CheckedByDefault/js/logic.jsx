class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Checkbox index={0} checked={false} text="I read the terms" />
                <Checkbox index={1} checked={false} text="I accept the terms" />
                <Checkbox index={2} checked={true} text="I want to get the weekly newsletter" />
                <Checkbox index={3} checked={true} text="I want to lorem" />
            </div>
        )
    }
}

class Checkbox extends React.Component {
    constructor() {
        super();
        this.check = this.check.bind(this);
    }
    
    check() {
        if (this.props.checked) {
            $('input')[this.props.index].checked = true;
        }
    }
    
    componentDidMount() {
        this.check();
    }

    render() {
        return (
            <div className="item">
                <input type="checkbox" name="" id="" /> <span>{this.props.text}</span>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);