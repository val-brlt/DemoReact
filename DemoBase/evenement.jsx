/* LES EVENEMENTS */

// Création d'un évenement qui incrémente
class IncrementEvent extends React.Component {

    constructor (props) {
        super(props)
        this.state = {count : 0}
    }

    incrementer (e) {
        // enleve les evenements par defaut
        e.preventDefault();
        this.setState((state) => {
            return {count : state.count + 1}
        })
    }

    render () {
        return <React.Fragment>
        <h2>Compteur : {this.state.count}</h2>
        <button onClick={this.incrementer.bind(this)} >Incrementer</button>
        </React.Fragment> 
    }
}

// Composant qui incrémente un chiffre toutes les secondes avec un bouton pause
class IncrecrementerPause extends React.Component {

    constructor (props) {
        super(props)
        // Création de l'état
        this.state = {count: props.start, text : 'Pause'}
        // Création du timer
        this.timer = null
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick () {
        // Utiliser une fonction pour modifier l'état
        // Sinon risque de conflit avec le setState
        this.setState((state,props) => {
            return {count: state.count + props.step}
        });
    }

    toggle () {
        // Changement de texte
        this.state.text === 'Pause' ? this.setState({text : 'Play'}) : this.setState({text : 'Pause'})
        // Changement de l'état
        this.state.text === 'Pause' ? this.componentWillUnmount() : this.componentDidMount()
    }

    reset () {
        this.setState({count : this.props.start})
    }

    render () {
        return <React.Fragment> 
        <h3>
           Nombre (step={this.props.step}) : {this.state.count}
        </h3>
        
        {/* PROBLEME : Créer une fonction toute les secondes */}
        {/* <button onClick={this.toggle.bind(this)} >{this.state.text}</button> */}
        {/* <button onClick={this.reset.bind(this)} >Reset</button> */}
        {/* SOLUTION : définir les fonctions dans le constructor (+ perfomant)*/}
        <button onClick={this.toggle} >{this.state.text}</button>
        <button onClick={this.reset} >Reset</button>
        </React.Fragment>
    }
}



ReactDOM.render(<IncrementEvent></IncrementEvent>, document.getElementById('appEvent'))
ReactDOM.render(<IncrecrementerPause start={0} step={1}></IncrecrementerPause>, document.getElementById('appEvent2'))