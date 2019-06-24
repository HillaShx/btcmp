class Factorial extends React.Component {
    factorial(num) {
        let result = 1;
        if (num === 0) {
            return 0;
        }
        while (num > 0) {
            result = result * num;
            num--;
        }
        return result;
    }
    render() {
        return (
            <div className="display-result">
                Factorial 5 is:
                <p>{this.factorial(5)}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Factorial/>,
    document.getElementById("root")
);