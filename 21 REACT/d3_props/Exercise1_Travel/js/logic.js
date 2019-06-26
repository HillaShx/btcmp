const CARD_DATA = {
    travel: {
        cls: "travel",
        title: "Ready to Travel",
        desc: "Choose your destination, plan your trip. Pick the best destination for your holiday",
        position: 1
    },
    date: {
        cls: "date",
        title: "Select the Date",
        desc: "Select the lorem and ipsum the dolor mit amet. Guaranteed!",
        position: 2
    },
    home: {
        cls: "home",
        title: "Feels Like Home",
        desc: "Enjoy your holidays! Don't forget to grab a beer and take photos!",
        position: 3
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Card   imgUrl= "./img/placeholder_icon.png"
                        title="Ready to Travel" 
                        text="Choose your destination, plan your trip. Pick the best destination for your holiday"
                        index={0} />
                <Card   imgUrl= "./img/placeholder_icon.png"
                        title="Select the Date" 
                        text="Select the lorem and ipsum the dolor mit amet. Guaranteed!"
                        index={1} />
                <Card   imgUrl= "./img/placeholder_icon.png"
                        title="Feels Like Home"
                        text="Enjoy your holidays! Don't forget to grab a beer and take photos!"
                        index={2} />
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <Icon imgUrl={this.props.imgUrl}/>
                <Description title={this.props.title} text={this.props.text} />
                <BreadCrumbs activeCard={this.props.index} />
            </div>
        )
    }
}

class Icon extends React.Component {
    render() {
        return (
            <img src={this.props.imgUrl} alt=""/>
        )
    }
}

class Description extends React.Component {
    render() {
        return (
            <div className="description">
                <h1 className="description-title">{this.props.title}</h1>
                <p className="description-text">{this.props.text}</p>
            </div>
        )
    }
}

class BreadCrumbs extends React.Component {
    render() {
        return (
            <div className="crumb-bar">
                <span className={`crumb ${this.props.activeCard === 0 ? ' is-active' : ''}`}></span>
                <span className={`crumb ${this.props.activeCard === 1 ? ' is-active' : ''}`}></span>
                <span className={`crumb ${this.props.activeCard === 2 ? ' is-active' : ''}`}></span>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
