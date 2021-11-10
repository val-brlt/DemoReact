// On veut pouvoir accéder à un élement du DOM avec un event d'un
// autre élement

/* 2 situations pour justifier l'utilisation d'une référence */

// 1 - Si on à des champs non-contrôlé auquel on veut récuperer les données
// champ non contrôlé = pas de value

// 2 - Si on a des composants externes à React
// Par exemple pour faire communiquer des libraires JS 
// qui ne sont pas pensé pour React de base


// Pour cela on créer une référence

const Field = React.forwardRef(function (props,ref) {
    return  <input type="text" ref={ref} placeholder="Ref avec Forward - function" />

})


class TextField extends React.Component{
    render() {
        console.log(this.props.ref)
        return <input type="text" ref={this.props.Forwardref} placeholder="Ref avec Forward - class" />
    }
}

const TextFieldWithRef = React.forwardRef((props,ref) => {
    return <TextField Forwardref={ref} {...props} />
})
// {...props} -> fais passer toutes les propriétés des props

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef()
        this.inputForward = React.createRef()
        this.inputForwardCLass = React.createRef()
    }

    handleClick(e) {
        console.log(this.input.current.value)
        console.log(this.inputForward.current.value)
        console.log(this.inputForwardCLass.current.value)
    }

    render() {
        return <div className="d-flex justify-content-center mb-5">
            <input type="text" ref={this.input} placeholder="Ref"/>
            <Field ref={this.inputForward} />
            <TextFieldWithRef ref={this.inputForwardCLass} />
            <button onClick={this.handleClick}>Test</button>
        </div>
    }

}

ReactDOM.render(<Home />, document.getElementById('ref'))