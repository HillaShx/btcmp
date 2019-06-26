class Color {
    constructor(hex,name) {
        this.hex = hex;
        this.name = name;
    }
}

const shirtColors = [new Color("#6dd3ce","Middle Blue Green"), new Color("#c8e9a0","Granny Smith Apple"), new Color("#f7a278","Light Salmon")]
const dressColors = [new Color("#a13d63", "Medium Ruby"), new Color("#351e29","Dark Purple"), new Color("#b8d8ba","Light Moss Green")]

class App extends React.Component {
    render() {
        return (
            <div>
                <Item type="shirt" colors={shirtColors} />
                <Item type="dress" colors={dressColors} />
            </div>
        )
    }
}

class Item extends React.Component {
    constructor() {
        super();
        this.getSelectedColor = this.getSelectedColor.bind(this);
    }

    getSelectedColor(e) {
        let textForDisplay = $(`#${this.props.type}-section option:selected`).text();
        let colorForDisplay = $(`#${this.props.type}-section option:selected`).val();
        $(`#${this.props.type}-section .selected-color`).css('color', colorForDisplay);
        $(`#${this.props.type}-section .selected-color`).html(textForDisplay);
    }

    render() {
        return (
            <div id={this.props.type + "-section"}>
                <select name="colors"  onChange={this.getSelectedColor}>
                    <option value="">Choose Color</option>
                    <option value={this.props.colors[0].hex}>{this.props.colors[0].name}</option>
                    <option value={this.props.colors[1].hex}>{this.props.colors[1].name}</option>
                    <option value={this.props.colors[2].hex}>{this.props.colors[2].name}</option>
                </select>
                    <h1>Your <span className="item">{this.props.type}</span> will be <span className="selected-color"></span></h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);