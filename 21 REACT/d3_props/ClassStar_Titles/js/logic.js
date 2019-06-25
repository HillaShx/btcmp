class App extends React.Component {
    render() {
        return (
        <div className="main">
            <Title font="cursive" text="If I rule the DOM" />
            <Title font="fantasy" text="Talk is cheap. Show me the code" />
        </div>
        )
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            fontFamily: this.props.font
        }
    }
     render() {
         return (
             <h2 style={this.style}>{this.props.text}</h2>
         )
     }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);