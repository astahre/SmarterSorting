import React, {useState} from 'react';

function AddProduct() {
	const [productName , setProductName] = useState('');
	const [ingredient , setIngredient] = useState('');


	// function to update state of productName with
	// value enter by user in form
	const handleChange =(e)=>{
	setProductName(e.target.value);
	}
	// function to update state of ingredient with value
	// enter by user in form
	const handleIngredientChange =(e)=>{
	setIngredient(e.target.value);
	}


	const handleSubmit=(e)=>{


		alert('A form was submitted with ProductName :"' + productName +
		'" and Ingredient :"'+ingredient  + '"');
	e.preventDefault();

	}
return (
	<div className="AddProduct">
	<header className="AddProduct-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}

		<label >
		ProductName:
		</label><br/>
		<input type="text" value={productName} required onChange={(e) =>
		{handleChange(e)}} /><br/>
		{ /*when user write in productName input box , handleChange()
			function will be called. */}
		<label >
		Ingredient:
		</label><br/>
		<input type="text" value={ingredient} required onChange={(e) =>
		{handleIngredientChange(e)}} /><br/>
			{ /*when user write in ingredient input box , handleIngredientChange()
			function will be called. */}


		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default AddProduct;


// import React from 'react'
// import '../App.css';
// import { Link } from "react-router-dom";
//
// class AddProduct extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//             newProduct: ""
//         };
//         this.addProduct = this.addProduct.bind(this);
//         this.setNewProduct = this.setNewProduct.bind(this);
//         // this.navigate = useNavigate();
//     }
//     // addProduct() {
//     //     this.setState({
//     //         products: this.state.products.concat([this.state.newProduct]),
//     //         newProduct: ""});
//     // }
//
//     setNewProduct(event) {
//         this.setState({newProduct: event.target.value})
//     }
//
//     addProduct() {
//         fetch('http://localhost:5000/api/product',{
//             method: "POST",
//             body: JSON.stringify({
//                 products: this.state.products
//             })
//         })
//     }
//
//     render() {
//       return (
//            <div className="App">
//       <header className="App-header">
//         <div className="AddProduct">
//             {this.state.products.map(product=> (
//                 <p>{(product)}</p>
//             ))}
//             <input value={this.state.newProduct} onChange={this.setNewProduct}/>
//             <button onClick={this.addProduct} disabled={this.state.newProduct === ""}>Add Product</button>
//             <button onClick={() => this.addProduct()} disabled={this.state.products.length === 0}>Add Product</button>
//             <Link to="/">Cancel</Link>
//         </div>
//       </header>
//         </div>
//       );
//     }
// }
//
// export default AddProduct;
