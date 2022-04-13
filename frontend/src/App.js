import React from "react";
import { Link } from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar';
// import AddProduct from "./pages/AddProduct";
// import ProductList from "./pages/ProductList";

// function App() {
//   return (
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/ProductList' component={ProductList} />
//           <Route path='/AddProduct' component={AddProduct} />
//         </Routes>
//       </Router>
//   );
// }

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
          {this.state.products.map(product=> (
              <p>{
                // product.productName
              }
                }</p>
          ))}
          <Link to="/addProduct">Add Product</Link>
        </div>
    )
  }
}

export default App;
