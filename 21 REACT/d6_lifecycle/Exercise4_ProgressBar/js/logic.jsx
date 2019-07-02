class App extends React.Component {
    constructor() {
        super()
        this.increasePercentage = this.increasePercentage.bind(this);
        this.state = {
            general: 41,
            uploading: 82,
            tasks: 76
        }
        this.progressInterval = setInterval(this.increasePercentage, 1000)
    }
    
    increasePercentage() {
        let increaseAmount = Math.floor(Math.random() * 4 + 1);
        for(let prop in this.state) { 
            if (this.state.hasOwnProperty(prop)) {
                if (this.state[prop] + increaseAmount <= 100) {
                    this.setState({
                        [prop]: this.state[prop] + increaseAmount
                    })
                }
            }
         }
    }

    componentDidMount() {
        this.progressInterval;
    }

    render() {
        return (
            <div className="main">
                <Card title="General" percentage={this.state.general} barColor="#88cde7" />
                <Card title="Uploading" percentage={this.state.uploading} barColor="#fd8b03" />
                <Card title="Tasks Status" percentage={this.state.tasks} barColor="#da7094" />
            </div>
        )
    }
}

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="title"><h1>{this.props.title}</h1></div>
                <div className="percent"><span className="percent-label">{this.props.percentage}<span style={{fontSize: "20px"}}>%</span></span></div>
                <div className="progress-bar"><div className="bar" style={{width: `${this.props.percentage}%`, backgroundColor: this.props.barColor}}></div></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);