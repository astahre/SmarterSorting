import React from 'react'


class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:5000/product').then(response=> response.json()).then(response => {
            this.setState({
                products: response
            })
        })
    }

    render() {
      return (
        <div className="Information">
            {this.state.products.map(product=> (
                <p>Product: {(product.name)}<br/> {product.ingredients.map(ingredient => (
        <span>{(ingredient.ingredient)} </span>
    ))}</p>
            ))}
        </div>
      );
    }
}

export default ProductList;
