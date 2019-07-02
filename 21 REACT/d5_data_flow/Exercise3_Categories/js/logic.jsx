class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Dropdown />
                <Dropdown />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);