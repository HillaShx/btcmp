class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Checkbox checked={false} text="I read the terms" />
                <Checkbox checked={false} text="I accept the terms" />
                <Checkbox checked={true} text="I want to get the weekly newsletter" />
                <Checkbox checked={true} text="I want to lorem" />
            </div>
        )
    }
}

class Checkbox extends React.Component {
    render() {

        if (this.props.checked) {
            return (
                <div className="item">
                    <input type="checkbox" name="" id="" checked /> <span>{this.props.text}</span>
                </div>
            )
        } else {
            return (
                <div className="item">
                    <input type="checkbox" name="" id="" /> <span>{this.props.text}</span>
                </div>
            )
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);