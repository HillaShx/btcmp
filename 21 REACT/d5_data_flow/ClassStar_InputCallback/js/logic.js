class App extends React.Component {
    constructor() {
        super();
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            username: ""
        }
    }
    
    updateContent(text) {
        this.setState({
            username: text
        })
        
    }

    render() {
        return (
            <div>
                <label htmlFor="username-input">Enter your username</label>
                <Input handleChange={this.updateContent} />
                <div>{this.state.username}</div>
            </div>
        )
    }
}

class Input extends React.Component {
    constructor() {
        super();
        this.extractInputValue = this.extractInputValue.bind(this);
    }


    extractInputValue(e) {
        this.props.handleChange(e.target.value)
    }

    render() {
        return (
            <input type="text" onChange={this.extractInputValue}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);