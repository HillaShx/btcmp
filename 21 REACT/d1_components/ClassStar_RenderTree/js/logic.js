class TreeComponent extends React.Component {
    render() {
        return (
            <div id="tree">
                <Box1/>
            </div>
        );
    }
}

class Box1 extends React.Component {
    render() {
        return (
            <div id="blue">
                <Box2/>
            </div>
        );
    }
}

class Box2 extends React.Component {
    render() {
        return (
            <div id="pink">
                <Box3/>
                <Box3/>
            </div>
        );
    }
}

class Box3 extends React.Component {
    render() {
        return (
            <div id="purple"></div>
        );
    }
}

ReactDOM.render(
    <TreeComponent/>,
    document.getElementById("root")
);