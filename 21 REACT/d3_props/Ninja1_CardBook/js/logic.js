const PROFILE_DATA = [
    {
        name: "Ilya Dmitruk",
        location: "Kiev, Ukraine",
        isPublic: true,
        bio: "I'm #founder and #designer at cardsaround. Contact me for #investment #productdesign",
        imgUrl: './img/nawy0.png',
        contactInfo: [
            {
                title: "Call",
                link: "tel:5552424"
            },
            {
                title: "Linkedin",
                link: "http://www.linkedin.com/"
            }
        ]
    },
    {
        name: "Michael Rodriguez",
        location: "Henry's Video Games",
        isPublic: true,
        bio: "Lorem ipsum #dolor, sit amet #consectetur adipisicing #elit. Provident inventore doloremque quia aliquid",
        imgUrl: './img/nawy1.png',
        contactInfo: [
            {
                title: "Twitter",
                link: "http://www.twitter.com/"
            },
            {
                title: "Facebook",
                link: "http://www.facebook.com/"
            }
        ]
    },
    {
        name: "Nancy Gordon",
        location: "Deborah's Spa",
        isPublic: true,
        bio: "#Lorem ipsum dolor, sit #amet consectetur adipisicing #elit. Provident inventore #doloremque quia aliquid",
        imgUrl: './img/nawy2.jpg',
        contactInfo: [
            {
                title: "Instagram",
                link: "http://www.instagram.com/"
            },
            {
                title: "Personal Site",
                link: "http://www.mysite.com/"
            }
        ]
    },
    {
        name: "Jacky Green",
        location: "Google Inc.",
        isPublic: false,
        bio: "Lorem #ipsum dolor, sit #amet consectetur adipisicing elit. Provident #inventore #doloremque quia aliquid",
        imgUrl: './img/nawy3.jpeg',
        contactInfo: [
            {
                title: "Call",
                link: "tel:5552424"
            },
            {
                title: "E-mail",
                link: "mailto:my@email.com"
            }
        ]
    },
    {
        name: "Jesse Barnes",
        location: "Deborah's Spa",
        isPublic: true,
        bio: "Lorem ipsum #dolor, #sit amet consectetur adipisicing elit. Provident #inventore doloremque quia aliquid",
        imgUrl: './img/nawy4.jpg',
        contactInfo: [
            {
                title: "Instagram",
                link: "http://www.instagram.com/"
            },
            {
                title: "Blog",
                link: "http://www.blog.com/"
            }
        ]
    },
    {
        name: "Eric Myers",
        location: "Stephen's Dim Sum",
        isPublic: true,
        bio: "Lorem ipsum #dolor, sit #amet consectetur adipisicing elit. Provident #inventore doloremque #quia aliquid",
        imgUrl: './img/nawy5.jpg',
        contactInfo: [
            {
                title: "Google+",
                link: "http://plus.google.com/"
            },
            {
                title: "Instagram",
                link: "http://www.instagram.com/"
            }
        ]
    },
    {
        name: "Monica Wynn",
        location: "Henry's Video Games",
        isPublic: true,
        bio: "#Lorem ipsum #dolor, sit amet consectetur #adipisicing elit. Provident inventore doloremque quia #aliquid",
        imgUrl: './img/nawy6.png',
        contactInfo: [
            {
                title: "Twitter",
                link: "http://www.twitter.com/"
            },
            {
                title: "Facebook",
                link: "http://www.facebook.com/"
            }
        ]
    },
    {
        name: "Natalie Walker",
        location: "Virginia's Casino",
        isPublic: false,
        bio: "Lorem #ipsum dolor, sit amet #consectetur adipisicing elit. #Provident inventore doloremque #quia aliquid",
        imgUrl: './img/nawy7.jpeg',
        contactInfo: [
            {
                title: "Whatsapp",
                link: "tel:5552424"
            },
            {
                title: "E-mail",
                link: "mailto:my@email.com"
            }
        ]
    }
]

const cardColors = ["#97a1a2","#f3e500","#fefefe","#d9dbf1","#00ecf9","#f86bba"]


class App extends React.Component {
    render() {
        return (
            <div id="main">
                <Card profile={PROFILE_DATA[0]} />
                <Card profile={PROFILE_DATA[1]} />
                <Card profile={PROFILE_DATA[2]} />
                <Card profile={PROFILE_DATA[3]} />
                <Card profile={PROFILE_DATA[4]} />
                <Card profile={PROFILE_DATA[5]} />
                <Card profile={PROFILE_DATA[6]} />
                <Card profile={PROFILE_DATA[7]} />
            </div>
        )
    }
}


class Card extends React.Component {
    constructor() {
        super();
        this.getRandomColor = this.getRandomColor.bind(this);
    }

    getRandomColor() {
        let randomInt = Math.floor(Math.random() * 6);
        let colorHex = cardColors[randomInt];
        return {backgroundColor: colorHex}
    }
    render() {
        return (
            <div className="card" style={this.getRandomColor()}>
                <div className="privacy">{this.props.profile.isPublic ? "Public" : "Private"}</div>
                <div className="profile-img"><img src={this.props.profile.imgUrl} alt={this.props.profile.name} /></div>
                <h4 className="location">{this.props.profile.location}</h4>
                <h2 className="name">{this.props.profile.name}</h2>
                <p className="bio">{this.props.profile.bio}</p>
                <div className="buttons">
                    <div className="contact-btn">
                        <a href={this.props.profile.contactInfo[0].link}>{this.props.profile.contactInfo[0].title}</a></div>
                    <div className="contact-btn">
                        <a href={this.props.profile.contactInfo[1].link}>{this.props.profile.contactInfo[1].title}</a>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);