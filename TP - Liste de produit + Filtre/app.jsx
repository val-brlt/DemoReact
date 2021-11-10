const PRODUCTS = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class ProductCat extends React.Component {
    render() {
        return <tr>
            <th colSpan="2">
                {this.props.category}
            </th>
        </tr>
    }
}

class Product extends React.Component {
    render() {
        return <tr>
            <td className={this.props.isStocked ? "" : "text-danger"}>{this.props.nom}</td>
            <td>{this.props.prix}</td>
        </tr>
    }
}

class ProductList extends React.Component {

    render() {
        const isStockOnly = this.props.isStockOnly
        // On créer un tableau qui contient les lignes
        let lastCat = null;
        let lines = []
        this.props.products.forEach(product => {
            // Affichage du nom de catégorie
            if (lastCat !== product.category) {
                lines.push(<ProductCat key={product.category} category={product.category} />)
            }
            // Affiche d'un produit + filtre nom
            if (product.name.includes(this.props.filterText)) {
                if (isStockOnly && product.stocked) {
                    lines.push(<Product key={product.name} nom={product.name} prix={product.price} isStocked={product.stocked} />)
                } else if (!isStockOnly) {
                    lines.push(<Product key={product.name} nom={product.name} prix={product.price} isStocked={product.stocked} />)
                }
            }
            lastCat = product.category
        });
        return (<table className="table mt-4">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prix</th>
                </tr>
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>)
    }

}

class SearchBar extends React.Component {

    render() {
        let filterText = this.props.filterText
        let isStockOnly = this.props.isStockOnly
        let handleChange = this.props.handleChange
        return <form>
            <div className="form-group">
                <input onChange={handleChange} value={filterText} name="filterText" className="form-control" type="text" placeholder="Search..." />
            </div>
            <div className="form-check mt-2">
                <input onChange={handleChange} type="checkbox" name="isStockOnly" className="form-check-input" id="onlyProductsInStock" checked={isStockOnly} />
                <label className="form-check-label" htmlFor="onlyProductsInStock" >Only show products in stock</label>
            </div>
        </form>
    }
}

class AppSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            isStockOnly: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const action = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: action
        })
    }

    render() {
        return <React.Fragment>
            <SearchBar filterText={this.state.filterText}
                isStockOnly={this.state.isStockOnly}
                handleChange={this.handleChange}
            />
            <ProductList products={this.props.products}
                filterText={this.state.filterText}
                isStockOnly={this.state.isStockOnly}
                handleChange={this.handleChange}
            />
        </React.Fragment>
    }
}



ReactDOM.render(<AppSearch products={PRODUCTS} />, document.getElementById('content'));