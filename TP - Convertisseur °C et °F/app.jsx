const scaleNames= {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
    console.log(celsius)
    return (celsius * 9 / 5) + 32
}


function BoilingVedict({celsius}) {
    if (celsius !== '') {
        let isBoilingBool = parseFloat(celsius) > 110
        
        let response = <div className={'alert mt-4 alert-' + (isBoilingBool ? "success" : "danger")}>
            {isBoilingBool ? <p>L'eau bout</p> : <p>L'eau ne bout pas</p>}
        </div>

        return <div className="container mt-4">
            <h1>Boiling Verdict</h1>
            {response}
        </div>
    }
    return ''
}


function TextField({ name, value, onChange, id, scale }) {
    return <div className="form-group">
        <label htmlFor={id}>Entrez la température (en {scaleNames[scale]})</label>
        <input type="number" onChange={onChange} className="form-control" name={name} id={id} value={value} />
    </div>
}



// Formulaire du degrès Celsius
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            celsius: '',
            fahrenheit: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        const name = e.target.name;
        const tempConvert = (name === 'celsius' ? toFahrenheit(parseFloat(e.target.value)) : toCelsius(parseFloat(e.target.value)));
        this.setState({
            [name]: e.target.value,
            [name === 'celsius' ? 'fahrenheit' : 'celsius']: tempConvert.toFixed(2)
        });
    }

    render() {
        return <div className="container mt-4">
            <h1>Formulaire de conversion de température</h1>
                <TextField scale='c' value={this.state.celsius} onChange={this.handleChange} name="celsius" id="celsius" placeholder="Degrés Celsius"></TextField>
                <TextField scale='f' value={this.state.fahrenheit} onChange={this.handleChange} name="fahrenheit" id="fahrenheit" placeholder="Degrés Celsius"></TextField> 
                <BoilingVedict celsius={this.state.celsius} />
        </div>
    }
}



ReactDOM.render(<Calculator />, document.getElementById('form'));
