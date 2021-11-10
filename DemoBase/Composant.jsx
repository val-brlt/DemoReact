/* LES COMPOSANTS */

// Créer un composant
function HelloWorld({name, age}) {
    return <h2>Hello {name} , {age} ans !</h2>;
}

// Récupérer le texte d'un composant
function HelloWorldChildren({name, age, children}) {
    return <React.Fragment>
        <h2>Hello {name} , {age} ans !</h2>
        <p>{children}</p> 
    </React.Fragment>
}





/* ETAT ET CYCLE DE VIE */
// On affiche la date du jour
class Clock extends React.Component {

    constructor (props) {
        super(props);
        // état du composant
        this.state = {date: new Date()};
        // On déclare un timer
        this.timer = null
    }

    // Quand le composant est monté
    // On change l'état du composant toutes les 1 s
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    // Quand le composant est supprimé
    // On supprime l'interval dans la variable timer
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick () {
        this.setState({date: new Date()});
    }

    render() {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }

}

// Composant qui incrémente un chiffre toutes les secondes
class Increcrementer extends React.Component {

    constructor (props) {
        super(props)
        // Création de l'état
        this.state = {count: props.start}
        // Création du timer
        this.timer = null
    }

    componentDidMount() {
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
s
    render () {
        return <h3>
           Nombre (step={this.props.step}) : {this.state.count}
        </h3>
    }
}

// Mettre des valeurs par défaut
Increcrementer.defaultProps = {
    start: 0,
    step: 1
}

// Créer un composant sous forme de class
class Home extends React.Component {
    render() {
        return <React.Fragment> 
            <h2>Temps : </h2>
            <Clock /> 
            <Increcrementer start={48} />
            <Increcrementer start={12} step={10} />
            </React.Fragment>
    }
}

// Lier un composant au DOM
ReactDOM.render(<HelloWorld age="5" name="Guillaume"></HelloWorld>, document.getElementById('appComposant'));
ReactDOM.render(<HelloWorldChildren age="5" name="Guillaume">Je suis le texte enfant</HelloWorldChildren>, document.getElementById('appComposantTxt'));
ReactDOM.render(<Home></Home>, document.getElementById('appComposantClass'));



