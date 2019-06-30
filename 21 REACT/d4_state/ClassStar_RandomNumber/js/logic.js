class App extends React.Component {
    constructor() {
        super();
        this.randomize = this.randomize.bind(this);
        this.state = {
            number: 0,
            color: "#000"
        }
    }

    randomize() {
        let newNum = Math.floor(Math.random() * 10) + 1;
        let newColor = function(num) {
            switch (num) {
                case 1:
                    return "#f7717d";
                case 2:
                    return "#7f2982";
                case 3:
                    return "#f72c25";
                case 4:
                    return "#324376";
                case 5:
                    return "#48a9a6";
                case 6:
                    return "#731dd8";
                case 7:
                    return "#574d68";
                case 8:
                    return "#a38560";
                case 9:
                    return "#ff6663";
                case 10:
                    return "#0b3954";
            }
        }
        this.setState({
            number: newNum,
            color: newColor(newNum)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.randomize}>randomize</button>
                <div style={{color: this.state.color}}>{this.state.number}</div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);