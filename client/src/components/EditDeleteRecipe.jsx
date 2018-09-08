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
    this.nameHandler = this.nameHandler.bind(this);
    this.stepsHandler = this.stepsHandler.bind(this);
    this.ingredientsHandler = this.ingredientsHandler.bind(this);
    this.servingsHandler = this.servingsHandler.bind(this);
    this.prepTimeHandler = this.prepTimeHandler.bind(this);
    this.cookTimeHandler = this.cookTimeHandler.bind(this);
    this.submitClickHandler = this.submitClickHandler.bind(this);
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
  submitClickHandler() {
    console.log('old name: ', this.props.recipe.name)
    console.log('new name: ', this.state.name)
    console.log(this.state)

    // this.props.update(this.props.recipe.name, editedRecipe);
    this.props.clickSubmit();
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

  prepTimeHandler(event) {
    this.setState({
      prepTime: event
    })
  }

  servingsHandler(event) {
    this.setState({
      servings: event
    })
  }

  stepsHandler(event) {
    this.setState({
      steps: event
    })
  }

  cookTimeHandler(event) {
    this.setState({
     cookTime: event
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
          <textarea type="text" id="ingredientsInput" rows="10" cols="35" onChange={(e) => this.ingredientsHandler(e.target.value)} value={this.state.ingredients}/>
          <h3>Prep Time</h3>
          <input type="text" id="prepTimeInput" onChange={(e) => this.prepTimeHandler(e.target.value)} value={this.state.prepTime}/>
          <h3>Cook Time</h3>
          <input type="text" id="cookTimeInput" onChange={(e) => this.cookTimeHandler(e.target.value)} value={this.state.cookTime}/>
          <h3>Servings</h3>
          <input type="text" id="servingsInput" onChange={(e) => this.servingsHandler(e.target.value)} value={this.state.servings}/>
          <h3>Steps</h3>
          <textarea type="text" rows="10" cols="35" id="stepsInput" onChange={(e) => this.stepsHandler(e.target.value)} value={this.state.steps}/>
        </div>
        <div>
          <button id="submitChanges" onClick={() => this.submitClickHandler()}>Submit Changes</button>
        </div>
        <a onClick={() => deleteHandler()}>Delete Recipe</a>
      </div>
    )
  }
}


export default EditDeleteRecipe;

        //updateRecipe exists in the App component and it should take in two parameters: an identifer (name), and the object editedRecipe. props.clickSubmit
