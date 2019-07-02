class App extends React.Component {
    

    render() {
        return (
            <div className="main">
                <Box size={150} />
                <Box size={70} />
                <Box size={190} />
            </div>
        )
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
            }
        }
    }
    
    componentDidMount() {
        console.log("did mount");
        setTimeout(()=> {
            this.setState({
                style: {
                    margin: "10px",
                    position: "relative",
                    height: this.props.size,
                    width: this.props.size,
                    backgroundColor: "grey",
                    animation: "slidein 2s forwards"
                }
            });

        }, 1000)
    }

    componentDidUpdate() {
        console.log("did update");
        setTimeout(()=> {
            this.setState({
                style: {
                    margin: "10px",
                    position: "relative",
                    height: this.props.size,
                    width: this.props.size,
                    backgroundColor: "grey",
                    display: "none"
                }
            })
        }, 4000)
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