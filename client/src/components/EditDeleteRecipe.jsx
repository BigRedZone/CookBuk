import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';

const EditDeleteRecipe = (props) => {

  //delete handler needs to originate in the App component in order to pass data about component from here to App
  const deleteHandler = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      //delete recipe
    }
  }
  const submitClickHandler = () => {
    props.update(props.name, editedRecipe);
    props.clickSubmit();
  }
  // submitHandler needs to originate in the App component in order to pass data back to App
  let editedRecipe = {
    name: $('#recipeName').val(),
    ingredients: $('#ingredientsInput').val().join(', '),
    steps: $('#prepTimeInput').val().join(', '),
    cookTime: $('#cookTimeInput').val(),
    prepTime: $('#servingsInput').val()
  }

  return (
    <div>
      <h3>CookBuk</h3>
      <input type="text" id="recipeName" value={props.name}/>
      <div>
        <h4>Recipe Overview</h4>
        <h3>This Recipe Includes...</h3>
        <input type="text" id="ingredientsInput" value={props.ingredients}/>
        <h3>Prep Time</h3>
        <input type="text" id="prepTimeInput" value={props.prepTime}/>
        <h3>Cook Time</h3>
        <input type="text" id="cookTimeInput" value={props.cookTime}/>
        <h3>Servings</h3>
        <input type="text" id="servingsInput" value={props.servings}/>
      </div>
      <div>
        <button id="submitChanges" onClick={() => submitClickHandler()}>Submit Changes</button>
        //updateRecipe exists in the App component and it should take in two parameters: an identifer (name), and the object editedRecipe. props.clickSubmit
      </div>
      <a onClick={() => props.delete(props.name)}>Delete Recipe</a>
    </div>
  )
}

export default EditDeleteRecipe;