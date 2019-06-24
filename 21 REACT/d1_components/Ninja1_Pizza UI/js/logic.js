class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Menu/>
                <Pie/>
            </div>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <MenuButton text="NEW PIZZA"/>
                <MenuButton text="SAVE PIZZA"/>
                <MenuButton text="LOAD PIZZA"/>
                <ToppingsTitle/>
                <Topping text="Tomatoes" type="tomatoes"/>
                <Topping text="Olives" type="olives"/>
                <Topping text="Mushrooms" type="mushrooms"/>
                <Topping text="Pineapple" type="pineapple"/>
            </div>
        )
    }
}

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menu-button">
                {this.props.text}
            </div>
        )
    }
}

class ToppingsTitle extends React.Component {
    render() {
        return (
            <h3>Toppings</h3>
        )
    }
}

class Topping extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="topping {this.props.type}">
                {this.props.text}
            </div>
        )
    }
}

class Pie extends React.Component {

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);