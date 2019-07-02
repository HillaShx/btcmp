class Box extends React.Component {
    constructor() {
        super();

        console.log("box - constructor");
    }
    
    componentWillMount() {
        console.log("box - will mount");
    }

    componentDidMount() {
        console.log("box - was mounted");
    }

    componentWillReceiveProps(nextProps) {
        console.log("box will recieve props");
    }

    componentDidUpdate(prevProps, nextProps) {
        console.log("box was updated");
    }

    render() {
        console.log("box - render");
        let boxStyle = {
            margin: 20,
            padding: 10,
            border: "1px solid black",
            display: this.props.isShown ? "block" : "none"
        }

        return <div style={boxStyle}>{this.props.children}</div>
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isShown: true
        }
        console.log("app - constructor");
    }

    componentWillMount() {
        console.log("app - will mount");
    }

    componentDidMount() {
        setInterval(()=> {
            this.setState({
                isShown: !this.state.isShown
            })
        }, 1000);
    }
    
    render() {
        console.log("app - render");
        return (
            <Box isShown={this.state.isShown}>
                <Box isShown={this.state.isShown} />
                <Box isShown={this.state.isShown} />
            </Box>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);