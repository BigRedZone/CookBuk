import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';

class EditDeleteRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join(', '),
      steps: this.props.recipe.steps.join(', '),
      cookTime: this.props.recipe.cookTime,
      prepTime: this.props.recipe.prepTime,
      servings: this.props.recipe.servings
    };
    this.changeHandler = this.changeHandler.bind(this)
  }

  updateRecipe (recipeName, editedRecipe) {
    // update('/edit', newData, function(err, result) {
    console.log(recipeName);
    // })
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/edit',
      data: {name: recipeName, change: editedRecipe}
    })
    .done((data) => {
      console.log('PUT request data returned: ', data)
      console.log('PUT request success')
    })
    .fail(() => {
      console.log('PUT request failed')
    })
  }

  deleteRecipe (recipeName) {
    console.log(recipeName);
    $.ajax({
      type: 'Delete',
      url: 'http://localhost:3000/delete',
    })
    .done((data) => {
      console.log('DELETE request data returned: ', data)
      console.log('DELETE request success')
    })
    .fail(() => {
      console.log('DELETE request failed')
    })
  }


  //delete handler needs to originate in the App component in order to pass data about component from here to App
  deleteHandler () {
    if (confirm('Are you sure you want to delete this recipe?')) {
      console.log(`Deleted ${this.props.recipe.name}!`);
    }
  }
  submitClickHandler () {
    // var editedRecipe = {
    //   name: $('#recipeName').val(),
    //   ingredients: $('#ingredientsInput').val(),
    //   steps: $('#prepTimeInput').val(),
    //   cookTime: $('#cookTimeInput').val(),
    //   prepTime: $('#prepTimeInput').val(),
    //   servings: $('#servingsInput').val()
    // }
    // console.log(editedRecipe)

    // this.props.update(this.props.recipe.name, editedRecipe);
    // this.props.clickSubmit();
  }
  // submitHandler needs to originate in the App component in order to pass data back to App
  nameHandler(event) {
    // console.log(event)
    this.setState({
      name: event
    })
  }

  ingredientsHandler(event) {
    this.setState({
      ingredients: event
    })
  }

  ingredientsHandler(event) {
    this.setState({
      ingredients: event
    })
  }

  ingredientsHandler(event) {
    this.setState({
      ingredients: event
    })
  }

  render() {
    return (
      <div>
        <h3>CookBuk</h3>
        <input type="text" id="recipeName" onChange={(e) => this.nameHandler(e.target.value)}value={this.state.name}/>
        <div>
          <h4>Recipe Overview</h4>
          <h3>This Recipe Includes...</h3>
          <textarea type="text" id="ingredientsInput" rows="10" cols="35" value={this.state.ingredients}/>
          <h3>Prep Time</h3>
          <input type="text" id="prepTimeInput" value={this.state.prepTime}/>
          <h3>Cook Time</h3>
          <input type="text" id="cookTimeInput" value={this.state.cookTime}/>
          <h3>Servings</h3>
          <input type="text" id="servingsInput" value={this.state.servings}/>
          <h3>Steps</h3>
          <textarea type="text" rows="10" cols="35" id="stepsInput" value={this.state.steps}/>
        </div>
        <div>
          <button id="submitChanges" onClick={() => submitClickHandler()}>Submit Changes</button>
        </div>
        <a onClick={() => deleteHandler()}>Delete Recipe</a>
      </div>
    )
  }
}


export default EditDeleteRecipe;

        //updateRecipe exists in the App component and it should take in two parameters: an identifer (name), and the object editedRecipe. props.clickSubmit
