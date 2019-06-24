// I hope I can use it later to make my code cleaner and more efficient. I couldn't get how I could to it yet.

const features = {
    UI: {
        title: "USER INTERFACE DESIGN",
        imgUrl: '../img/features/UI.png',
        list: [
            "Wireframing",
            "Prototyping",
            "Usability Testing"
        ]
    },
    concept: {
        title: "Concept and Ideas".toUpperCase(),
        imgUrl: '../img/features/concept.png',
        list: [
            "Conceptualization",
            "Digital Branding",
            "Product Strategy"
        ]
    },
    design: {
        title: "Design and Branding".toUpperCase(),
        imgUrl: '../img/features/design.png',
        list: [
            "Interaction Design",
            "Graphic Design",
            "Identity Design"
        ]
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <TopBar/>
                <MainSection/>
                <Footer/>
            </div>
        )
    }
}

class TopBar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <TopBarNav/>
                <TopBarLogo/>
            </div>
        )
    }
}

class TopBarNav extends React.Component {
    
    constructor() {
        super();
        this.makeBold = this.makeBold.bind(this);
    }

    render() {
        return (
            <ul id="topbar-links">
                <li onClick={(e)=> this.makeBold(e.target)}>SERVICES</li>
                <li onClick={(e)=> this.makeBold(e.target)}>WORK</li>
                <li onClick={(e)=> this.makeBold(e.target)}>THE TEAM</li>
            </ul>
        )
    }

    makeBold(elm) {
        $(elm).css("font-weight", "bold");
    }
}

class TopBarLogo extends React.Component {
    render() {
        return (
            <div className="logo"></div>
        )
    }
}

class MainSection extends React.Component {
    render() {
        return (
            <ServicesStripe/>
        )
    }
}

class ServicesStripe extends React.Component {
    render() {
        return (
            <div className="stripe" id="services">
                <ServicesStripeTitle/>
                <ServicesStripeDescription/>
                <ServicesStripeFeatureSection/>
            </div>
        )
    }
}

class ServicesStripeTitle extends React.Component {
    render() {
        return (
            <h1>SERVICES</h1>
        )
    }
}

class ServicesStripeDescription extends React.Component {
    render() {
        return (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla sequi accusantium nobis? Aut culpa impedit illo. Architecto tenetur modi porro odio animi? Odio, ab explicabo neque corrupti aperiam nihil.</p>
        )
    }
}

class ServicesStripeFeatureSection extends React.Component {
    render() {
        return (
            <div className="feature-section">
                <ServicesStripeFeatureUI/>
                <ServicesStripeFeatureConcept/>
                <ServicesStripeFeatureDesign/>
            </div>
        )
    }
}

class ServicesStripeFeatureUI extends React.Component {
    render() {
        return (
            <div className="feature" id="feature-UI">
                <ServicesStripeFeatureUIImg/>
                <ServicesStripeFeatureUIList/>
            </div>
        )
    }
}

class ServicesStripeFeatureUIImg extends React.Component {
    constructor() {
        super();
        this.changeSize = this.changeSize.bind(this);
    }

    render() {
        return (
            <div className="feature-img" id="UI-img" onMouseOver={this.changeSize} onMouseOut={this.changeSize}></div>
        )
    }

    changeSize() {
        if ($('#UI-img').width() === 400) {
            $('#UI-img').width("350px")
        .height("350px");
        } else {
            $('#UI-img').width("400px")
            .height("400px");
        }
    }
}

class ServicesStripeFeatureUIList extends React.Component {
    constructor() {
        super();
        this.addBorder = this.addBorder.bind(this);
    }

    render() {
        return (
            <div className="feature-list">
                <h3 onMouseOver={this.addBorder}>USER INTERFACE DESIGN</h3>
                <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                </ul>
            </div>
        )
    }

    addBorder() {
        $('#feature-UI h3').css("border", "1px solid white");
        setTimeout(()=>{$('#feature-UI h3').css("border", "none")}, 1000)
    }
}

class ServicesStripeFeatureConcept extends React.Component {
    render() {
        return (
            <div className="feature" id="feature-concept">
                <ServicesStripeFeatureConceptImg/>
                <ServicesStripeFeatureConceptList/>
            </div>
        )
    }
}

class ServicesStripeFeatureConceptImg extends React.Component {
    constructor() {
        super();
        this.changeSize = this.changeSize.bind(this);
    }

    render() {
        return (
            <div className="feature-img" id="concept-img" onMouseOver={this.changeSize} onMouseOut={this.changeSize}></div>
        )
    }

    changeSize() {
        if ($('#concept-img').width() === 400) {
            $('#concept-img').width("350px")
            .height("350px");
        } else {
            $('#concept-img').width("400px")
            .height("400px");

        }
    }
}

class ServicesStripeFeatureConceptList extends React.Component {
    constructor() {
        super();
        this.addBorder = this.addBorder.bind(this);
    }
    render() {
        return (
            <div className="feature-list">
                <h3 onMouseOver={this.addBorder}>CONCEPT AND IDEAS</h3>
                <ul>
                    <li>Conceptualization</li>
                    <li>Digital Branding</li>
                    <li>Product Strategy</li>
                </ul>
            </div>
        )
    }

    addBorder() {
        $('#feature-concept h3').css("border", "1px solid white");
        setTimeout(()=>{$('#feature-concept h3').css("border", "none")}, 1000)
    }
}

class ServicesStripeFeatureDesign extends React.Component {
    render() {
        return (
            <div className="feature" id="feature-design">
                <ServicesStripeFeatureDesignImg/>
                <ServicesStripeFeatureDesignList/>
            </div>
        )
    }
}

class ServicesStripeFeatureDesignImg extends React.Component {
    constructor() {
        super();
        this.changeSize = this.changeSize.bind(this);
    }
    
    render() {
        return (
            <div className="feature-img" id="design-img" onMouseOver={this.changeSize} onMouseOut={this.changeSize}></div>
        )
    }

    changeSize() {
        if ($('#design-img').width() === 400) {
            $('#design-img').width("350px")
            .height("350px");
        } else {
            $('#design-img').width("400px")
            .height("400px");
        }
    }
}

class ServicesStripeFeatureDesignList extends React.Component {
    constructor() {
        super();
        this.addBorder = this.addBorder.bind(this);
    }

    render() {
        return (
            <div className="feature-list">
                <h3 onMouseOver={this.addBorder}>DESIGN AND BRANDING</h3>
                <ul>
                    <li>Interaction Design</li>
                    <li>Graphic Design</li>
                    <li>Identity Design</li>
                </ul>
            </div>
        )
    }

    addBorder() {
        $('#feature-design h3').css("border", "1px solid white");
        setTimeout(()=>{$('#feature-design h3').css("border", "none")}, 1000)
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer"></div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);