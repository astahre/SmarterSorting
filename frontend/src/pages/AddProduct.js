import React, {useState} from 'react';
import {useNavigate} from "react-router";

function AddProduct() {
	const [productName , setProductName] = useState('');
	const [ingredient , setIngredient] = useState('');
	const [ingredients, setIngredients] = useState([]);

	const navingate = useNavigate();


	// function to update state of productName with
	// value enter by user in form
	const handleChange =(e)=>{
	setProductName(e.target.value);
	}

	const handleAddIngredient =(e)=>{
		setIngredients(ingredients.concat([ingredient]));
		setIngredient('');

		e.preventDefault();
	}
	// function to update state of ingredient with value
	// enter by user in form
	const handleIngredientChange =(e)=>{
		setIngredient(e.target.value);

	}



	const handleSubmit=(e)=>{


		fetch('http://localhost:5000/product',{
            method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
            body: JSON.stringify({
				name: productName,
                ingredients: ingredients
            })
        }).then(()=>navingate('/productList'))
	e.preventDefault();

	}
return (
	<div className="AddProduct">
	<header className="AddProduct-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>


		<label >
		Product Name:
		</label><br/>
		<input type="text" value={productName} required onChange={(e) =>
		{handleChange(e)}} /><br/>
		{ /*when user write in productName input box , handleChange()
			function will be called. */}
		<label >
		Ingredient(s):
		</label><br/>
		<input type="text" value={ingredient} onChange={(e) =>
		{handleIngredientChange(e)}} /><br/>

        <input type="submit" onClick={(e) =>
		{handleAddIngredient(e)}} value="Add Ingredient"/>
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default AddProduct;


