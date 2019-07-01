class App extends React.Component {
    constructor() {
        super();
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            username: ""
        }
    }
    
    updateContent(e) {
        this.setState({
            username: e.target.value
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
    render() {
        return (
            <input type="text" onChange={this.props.handleChange}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);