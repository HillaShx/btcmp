class App extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div>
                <Comp1 color="magenta" />
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
            <div style={{color: this.props.color}}>Hello~</div>
        )
    }
}

class Comp2 extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "green"
        }
    }
    
    render() {
        return (
            <div style={{color: this.state.color}}>Hello~</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);