/* LES FORMULAIRES */



// Composant pour Décomposer les élements du form
function TextField({ name, value, onChange, id, children }) {
    return <div className="form-group">
        <label htmlFor={id}>{children}</label>
        <input type="text" onChange={onChange} className="form-control" name={name} id={id} value={value} />
    </div>
}

function TextAreaField({ name, value, onChange, id, children }) {
    return <div className="form-group">
        <label htmlFor={id}>{children}</label>
        <textarea type="text" onChange={onChange} className="form-control" name={name} id={id} value={value} />
    </div>
}


function CheckboxField({ name, value, onChange, id, children, checked }) {
    return <div className="form-check">
        <label htmlFor={id}>{children}</label>
        <input type="checkbox" checked={checked} onChange={onChange} className="form-check-input" name={name} id={id} value={value} />
    </div>
}

// Création d'un formulaire
class Home extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            nom: '',
            prenom: '',
            bio: '',
            nbChildren: 0,
            langues: [],
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    // PROBLEME : value empêche de modifier le formulaire
    // solution : on utilise un handleChange + onChange
    handleChange = (e) => {
        // On récupere le nom de l'input
        const name = e.target.name
        // On récupère le type de l'input
        const type = e.target.type
        let action;
        switch (type) {
            case 'checkbox': // Checkbox
                action = e.target.checked;
                break;
            case 'select-multiple': // Select multiple
                action = Array.from(e.target.selectedOptions).map(option => option.value);
                break;
            default:
                action = e.target.value;
        }
        // On modifie le nom en fonction de la valeur de la target de l'event e
        this.setState({
            [name]: action,
        })
    }

    // Function qui envoie les données en JSON pour le back
    handleSubmit = (e) => {
        e.preventDefault();
        // On convertit en JSON
        const formData = JSON.stringify(this.state);
        console.log(formData);
        // On reinitialise le formulaire
        this.setState({
            nom: '',
            prenom: '',
            bio: '',
            nbChildren: 0,
            langues: [],
            checked: false
        })
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} className="d-flex flex-column container">
                    <h1>Inscription</h1>
                    <TextField id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</TextField>
                    <TextField id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</TextField>
                    {/* TextArea possède une value contrairement au html*/}
                    <TextAreaField id="bio" name="bio" value={this.state.bio} onChange={this.handleChange}>Bio</TextAreaField>
                    {/* select :  On récupère l'option selectionnée depuis la value dans le select*/}
                    <label htmlFor="nbChildren">Nombres d'enfants :</label>
                    <select className="form-select"id="nbChildren" name="nbChildren" value={this.state.nbChildren} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    {/* Select multiple */}
                    {JSON.stringify(this.state.langues)}
                    <label htmlFor="langues">Langues</label>
                    <select multiple className="form-select" name="langues" id="langues" value={this.state.langues} onChange={this.handleChange}>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                        <option value="es">Espagnol</option>
                        <option value="it">Italien</option>
                    </select>
                    {/* Checkbox */}
                    <CheckboxField id="checked" name="checked" value={this.state.checked} onChange={this.handleChange}>
                        J'accepte les conditions d'utilisation
                    </CheckboxField>
                    {this.state.checked ? <p>Vous avez accepté</p> : <p>Vous n'avez pas accepté</p>}
                    {/* Fichier : React ne contrôle pas ce type d'input */}
                    {/* Champ non contrôlée par React */}
                    <input type="text" defaultValue="Champ non contrôlée par React" />
                    <div className="form-group">
                        <button className="btn-lg btn-primary"> Envoyer </button>
                    </div>
                    {JSON.stringify(this.state)}
                </form>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('appForm')
);