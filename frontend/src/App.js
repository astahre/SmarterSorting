import React from "react";
import { Link } from "react-router-dom";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/productList').then(response=> response.json()).then(response=> {
      this.setState({
        products: response
      })
    })
  }

  render() {
    return (
        <div className="App">
          {this.state.products.map(product=> {
            ();
          })}
          <Link to="/addProduct">Add Product</Link>
        </div>
    )
  }
}

export default App;
