class App extends React.Component {
    render() {
        return (
            <Box>
                <Box cls="box1">
                    <Box cls="box2">
                        <Box cls="box3">
                            <Box cls="box4" />
                            <Box cls="box4" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

class Box extends React.Component {
    render() {
        return (
            <div className={`box ${this.props.cls}`}>
                {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);