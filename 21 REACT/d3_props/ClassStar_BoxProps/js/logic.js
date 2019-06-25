class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Box cls="fresh" text="fresh" />
                <Box cls="calm" text="calm" />
                <Box cls="adventurous" text="adventurous" />
                <Box cls="happy" text="happy" />
            </div>
        )
    }
}

class Box extends React.Component {
    render() {
        return (
            <div className={`box ${this.props.cls}`}>{this.props.text}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);