class MenuBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="menu-bar">
                <Icon hasNotif={false} imgUrl='./img/users-icon.png' />
                <Icon hasNotif={false} imgUrl='./img/search-icon.png' />
                <Icon hasNotif={true} imgUrl='./img/messages-icon.png' />
            </div>
        )
    }
}

class Icon extends React.Component {
    constructor() {
        super();
        this.popBubble = this.popBubble.bind(this);
        this.state = {
            numOfNotif: Math.floor(Math.random() * 11),
            isClicked: false
        }
    }

    popBubble() {
        this.setState({
            isClicked: true
        })
    }

    render() {
        let toShow = this.props.hasNotif && !this.state.isClicked && (this.state.numOfNotif > 0);
        return (
            <div onClick={this.popBubble} className="icon" style={{backgroundImage: `url(${this.props.imgUrl})`}}>
                <div className={`notifications` + (toShow ? "" : " hide")}>{this.state.numOfNotif}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <MenuBar />,
    document.getElementById("root")
);