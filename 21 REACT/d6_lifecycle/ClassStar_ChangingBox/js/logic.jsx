class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Box />
            </div>
        )
    }
}

class Box extends React.Component {
    constructor() {
        super();
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            style: {
                backgroundColor: "green",
                width: "150px",
                height: "150px"
            }
        }
        this.interval = setInterval(()=> {
            this.changeColor()
        }, 500);
        this.numOfChanges = 0;
    }
    
    changeColor() {
        let colors = ["green", "blue", "pink", "purple"];
        let currColor = this.state.style.backgroundColor;
        let currIndex = colors.indexOf(currColor);
        let nextColor = colors[currIndex + 1];
        if (!nextColor) {
            nextColor = colors[0];
        }
        let updatedStyle = {
                backgroundColor: nextColor,
                width: "150px",
                height: "150px"
        }
        if (this.numOfChanges > 4) {
            updatedStyle = {
                backgroundColor: nextColor,
                width: "150px",
                height: "150px",
                "border-radius": "50%"
        }
        }
        console.log("changing color");
        this.setState({
            style: updatedStyle
        })

    }

    componentDidMount() {
        this.interval
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentWillUpdate() {
        this.numOfChanges++;
    }

    render() {
        return (
            <div style={this.state.style}></div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

setTimeout(()=> ReactDOM.unmountComponentAtNode(document.getElementById("root")), 5000)