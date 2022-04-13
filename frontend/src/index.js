import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";

import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/productList' element={<ProductList/>} />
          <Route path='/addProduct' element={<AddProduct/>} />
        </Routes>
      </Router>

  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     {/*<App />*/}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
