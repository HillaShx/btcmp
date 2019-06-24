class Lottery extends React.Component {
    raffle() {
        return Math.floor(Math.random() * 10) + 1;
    }

    render() {
        let msg = "";
        if (this.raffle() > 5) {
            msg = "you won!";
        } else {
            msg = "you lost!";
        }
        return (
            <h1>{msg}</h1>
        )
    }
}


ReactDOM.render(
    <Lottery/>,
    document.getElementById("root")
);