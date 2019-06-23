class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz">
                <QuizTitle/>
                <Q1/>
                <Q2/>
            </div>
        )
    }
}

class QuizTitle extends React.Component {
    render() {
        return (
            <h1>How Do You Lorem Ipsum?</h1>
        )
    }
}

class Q1 extends React.Component {
    render() {
        return (
            <div className="question">
                <Q1Title/>
                <Q1Input/>
            </div>
        )
    }
}

class Q1Title extends React.Component {
    render() {
        return (
            <p>How much do you lorem ipsum?</p>
        )
    }
}

class Q1Input extends React.Component {
    render() {
        return (
            <input type="range" min="0" max="2"/>
        )
    }
}

class Q2 extends React.Component {
    render() {
        return(
            <div className="question">
                <Q2Title/>
                <Q2Input/>
            </div>
        )
    }
}

class Q2Title extends React.Component {
    render() {
        return (
            <p>What is your lorem ipsum?</p>
        )
    }
}

class Q2Input extends React.Component {
    render() {
        return (
            <input type="text"></input>
        )
    }
}

ReactDOM.render(
    <Quiz/>,
    document.getElementById("root")
);