
function Button ({children, type, ...props}) {
    return <button className={"btn btn-" + type} {...props}>{children}</button>
}

// La composition vient se substituer à l'héritage
function PrimaryButton ({children, ...props}) {
    return <Button type="primary" {...props}>{children}</Button>
}

ReactDOM.render(<PrimaryButton>btn</PrimaryButton>, document.getElementById('appCompo'))