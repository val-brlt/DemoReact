/* Syntaxe JSX */

// Créer un élement React avec JSX
const titleJSX = <h2>
    Bonjour avec le JSX
    </h2>

// Création d'un élement avec un span avec JSX
const textSpanJSX = <h2>Texte avec Span <span>0</span>
</h2>


// Lier un élement React au DOM
ReactDOM.render(textSpanJSX, document.querySelector('#appJSX'))
ReactDOM.render(titleJSX, document.querySelector('#appSpanJSX'))


/* Création d'un compteur avec un élement réact */
// Ajouter un élement React dans un autre élement React
// permet lors d'action de juste modifier cet élement
// Ex : Ici juste le span contenue dans le h1 se modifie
let countJSX = 0;

function render() {
    // On utilise className pour ajouter une classe
    const textSpanComptJSX = <h2 className="text-primary" >Texte avec Span, compteur : <span>{countJSX}</span>
    </h2>
    ReactDOM.render(textSpanComptJSX, document.querySelector('#appSpanComptJSX'))
}

render();

window.setInterval(() => {
    countJSX++;
    render();
}, 1000)

/* FIN COMPTEUR  */


/* Création d'un élement avec le Fragment React*/
// Permet de disposer de plusieurs élements dans un seul élement
// Sans devoir utiliser la balise <div>
const textFragmentJSX = <React.Fragment>
    <h2>Texte avec Fragment</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
</React.Fragment>

ReactDOM.render(textFragmentJSX, document.querySelector('#appFragmentJSX'))


/* Création d'une liste avec React */
const items = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
]
// Création d'un élement avec une liste
// On utilise map pour remplacer le Foreach
const listJSX = <React.Fragment><h2>Liste d'items :</h2><ul>
    {items.map((item,k) => <li key={k}>{item}</li>)}
</ul></React.Fragment>

ReactDOM.render(listJSX, document.querySelector('#appListJSX'))
