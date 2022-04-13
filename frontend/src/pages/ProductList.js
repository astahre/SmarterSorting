import React from 'react'
// import ReactDOM from 'react'
import { Link } from "react-router-dom";


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
        <div className="Test">
            {this.state.products.map(product=> (
                <p>{(product.name)} {(JSON.stringify (product.ingredients))}</p>
            ))}
        </div>
      );
    }
}

export default ProductList;
