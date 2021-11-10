
/* UN COMPOSANT PUR */
// Ne rappelle pas le render si on enlève des élements de l'app


//Composant pur sous forme de class
class TextField extends React.PureComponent {

}

// Composant pur sous forme de fonction
function ProductRowComponenent(params) {
    return ''
}
const ProductRow = React.memo(ProductRow) 
// ou
const ProductRow2 = React.memo(function (params) {
    return ''
})


// Si on doit ajouter une entrée dans un tableau
const PRODUCTS = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

const PRODUCTS2 = [...PRODUCTS,{ category: "Electronics", price: "$199.99", stocked: true, name: "Redmi 10" }]
// évite les conflits
/* CAS GENERAL */
// Ajouter une entrée à la fin
/* const tab = [...items, newItem] */

// AJouter une entrée au début
/* const tab2 = [newItem, ...items] */