class ListComponent extends React.Component {
    render() {
        return (
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
                <li>fourth</li>
            </ul>
        )
    }
}



ReactDOM.render(
    <ListComponent/>,
    document.getElementById("root")
);