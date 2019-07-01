class App extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div>
                <Comp1 visibility="hidden" />
                <Comp2 />
            </div>
        )
    }
}

class Comp1 extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div onClick={this.showHide} style={{visibility: this.props.color}}>Hello~</div>
        )
    }
}

class Comp2 extends React.Component {
    constructor() {
        super();
        this.state = {
            visibility: "hidden"
        }
    }

    render() {
        return (
            <div style={{visibility: this.state.color}}>Hello~</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);