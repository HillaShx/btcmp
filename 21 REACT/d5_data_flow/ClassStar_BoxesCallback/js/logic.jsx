class App extends React.Component {
    constructor() {
        super();
        this.changeBgColor = this.changeBgColor.bind(this);
        this.state = {
            bgColor: "white"
        }
    }
    
    changeBgColor(color) {
        this.setState({
            bgColor: color
        })
    }
    
    render() {
        return (
            <Frame bgColor={this.state.bgColor}>
                <Box cls="box1" color="#8cf08b" handleClick={this.changeBgColor}>
                    <Box cls="box2" color="#87cdfd" handleClick={this.changeBgColor}>
                        <Box cls="box3" color="#ffb6c1" handleClick={this.changeBgColor}>
                            <Box cls="box4" color="#dda0dc" handleClick={this.changeBgColor}/>
                            <Box cls="box4" color="#dda0dc" handleClick={this.changeBgColor}/>
                        </Box>
                    </Box>
                </Box>
            </Frame>
        )
    }
}

class Frame extends React.Component {
    

    render() {
        return (
            <div className={'box main'} style={{backgroundColor: this.props.bgColor}}>
                {this.props.children}
            </div>
        )
    }
}

class Box extends React.Component {
    constructor() {
        super();
        this.extractBgColor = this.extractBgColor.bind(this);
    }
    
    extractBgColor(e) {
        this.props.handleClick(e.target.style.backgroundColor);
    }

    render() {
        return (
            <div onClick={this.extractBgColor} className={`box ${this.props.cls}`} style={{backgroundColor: this.props.color}}>
                {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);