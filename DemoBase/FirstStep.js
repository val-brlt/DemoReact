/* Premiers pas avec React */

// Créer un élement React
const title = React.createElement('h2', {}, 'Hello World')

// Création d'un élement avec un span
const textSpan = React.createElement('h2', {}, 'Texte avec Span ',
    React.createElement('span', {}, 0)
)

// Lier un élement React au DOM
ReactDOM.render(textSpan, document.querySelector('#appSpan'))
ReactDOM.render(title, document.querySelector('#app'))


/* Création d'un compteur avec un élement réact */
// Ajouter un élement React dans un autre élement React
// permet lors d'action de juste modifier cet élement
// Ex : Ici juste le span contenue dans le h1 se modifie
let count = 0;

function render() {
    const textSpanCompt = React.createElement('h2', {}, 'Texte avec Span Compteur ',
        React.createElement('span', {}, count)
    )
    ReactDOM.render(textSpanCompt, document.querySelector('#appSpanCompt'))
}

render();

window.setInterval(() => {
    count++;
    render();
}, 1000)

/* FIN COMPTEUR  */