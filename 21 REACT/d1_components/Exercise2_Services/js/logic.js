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
    render() {
        return (
            <ul id="topbar-links">
                <li>SERVICES</li>
                <li>WORK</li>
                <li>THE TEAM</li>
            </ul>
        )
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
    render() {
        return (
            <div className="feature-img UI-img"></div>
        )
    }
}

class ServicesStripeFeatureUIList extends React.Component {
    render() {
        return (
            <div className="feature-list">
                <h3>USER INTERFACE DESIGN</h3>
                <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                </ul>
            </div>
        )
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
    render() {
        return (
            <div className="feature-img concept-img"></div>
        )
    }
}

class ServicesStripeFeatureConceptList extends React.Component {
    render() {
        return (
            <div className="feature-list">
                <h3>CONCEPT AND IDEAS</h3>
                <ul>
                    <li>Conceptualization</li>
                    <li>Digital Branding</li>
                    <li>Product Strategy</li>
                </ul>
            </div>
        )
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
    render() {
        return (
            <div className="feature-img design-img"></div>
        )
    }
}

class ServicesStripeFeatureDesignList extends React.Component {
    render() {
        return (
            <div className="feature-list">
                <h3>DESIGN AND BRANDING</h3>
                <ul>
                    <li>Interaction Design</li>
                    <li>Graphic Design</li>
                    <li>Identity Design</li>
                </ul>
            </div>
        )
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