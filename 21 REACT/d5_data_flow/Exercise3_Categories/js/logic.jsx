class App extends React.Component {
    constructor() {
        super();
        this.categories = ["furniture", "plants", "colors"]
        this.subcategories = [["chair", "table", "closet"], ["flower", "tree", "bush"], ["purple", "pink", "green"]]
        this.updateSub = this.updateSub.bind(this);
        this.state = {
            subcategory: this.subcategories[0]
        }
    }

    updateSub(index) {
        this.setState({
            subcategory: this.subcategories[index]
        })
    }
    
    render() {
        return (
            <div className="main">
                <Dropdown handleSelect={this.updateSub} title="Category" id="category" items={this.categories}/>
                <Dropdown title="Sub Category" id="subcategory" items={this.state.subcategory} />
            </div>
        )
    }
}

class Dropdown extends React.Component {
    constructor() {
        super();
        this.extractKey = this.extractKey.bind(this);
    }

    extractKey(e) {
        let currKey = this.props.items.indexOf(e.target.value);
        if (this.props.handleSelect) {
            this.props.handleSelect(currKey);
        }
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <select onChange={this.extractKey} name="" id={this.props.id}>
                    <option value={this.props.items[0]}>{this.props.items[0]}</option>
                    <option value={this.props.items[1]}>{this.props.items[1]}</option>
                    <option value={this.props.items[2]}>{this.props.items[2]}</option>
                </select>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);