import React from 'react';
import $ from 'jquery';
// import Recipe from '../components/Recipe.jsx';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipes: ['Spaghetti', 'Cereal', 'Korean BBQ', 'Sushi'],
      // recipe: {
      //   name: 'Spaghetti',
      //   ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
      //   steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
      //   cookTime: '21 minutes',
      //   prepTime: '10 minutes',
      //   servings: '2 servings'
      // },
      name: '',
      ingredients: [],
      steps: [],
      cookTime: '',
      prepTime: '',
      servings: '',
      ingredient: '',
      step: '',
      servings: '',
    }
    //this.setRecipes = this.setRecipes.bind(this);
    //this.setRecipe = this.setRecipe.bind(this);
    this.setName = this.setName.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.setSteps = this.setSteps.bind(this);
    this.setCookTime = this.setCookTime.bind(this);
    this.setPrepTime = this.setPrepTime.bind(this);
    this.setServings = this.setServings.bind(this);
    this.setIngredient = this.setIngredient.bind(this);
    this.setStep = this.setStep.bind(this);
    this.undoIngredients = this.undoIngredients.bind(this);
    this.undoSteps = this.undoSteps.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.post = this.post.bind(this);
  }

  // Initialize
  componentDidMount() {
    // this.getRecipes();
  }

  // GET requests
  // getRecipes() {
  //   this.fetch('/homepage', this.setRecipes);
  // }

  // getRecipe() {
  //   this.fetch('/recipe', this.setRecipe);
  // }

  //Set States
  // setRecipes(data) {
  //   this.setState({
  //     recipes: data
  //   });
  // }

  // setRecipe(data) {
  //   this.setState({
  //     recipe: data
  //   });
  // }

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  setCookTime(e) {
    this.setState({
      cookTime: e.target.value
    });
  }

  setPrepTime(e) {
    this.setState({
      prepTime: e.target.value
    });
  }

  setServings(e) {
    this.setState({
      servings: e.target.value
    })
  }

  setIngredient(e) {
    this.setState({
      ingredient: e.target.value
    });
  }

  setIngredients() {
    this.setState({
      ingredients: [...this.state.ingredients, this.state.ingredient]
    })
  }

  setStep(e) {
    this.setState({
      step: e.target.value
    });
  }

  setSteps() {
    this.setState({
      steps: [...this.state.steps, this.state.step]
    })
  }

  //AJAX GET Request
  fetch(url, callback) {
    $.ajax({
      type: 'GET',
      url: url
    })
    .done((data) => {
      callback(data);
      console.log('GET SUCCESS');
    })
    .fail(() => {
      console.log('GET FAILED');
    });
  }

  undoIngredients() {
    let newIngredients = this.state.ingredients.slice(0, -1);
    this.setState({
      ingredients: newIngredients
    })
  }

  undoSteps() {
    let newSteps = this.state.steps.slice(0, -1);
    this.setState({
      steps: newSteps
    })
  }

  submitRecipe() {
    let recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      cookTime: this.state.cookTime,
      prepTime: this.state.prepTime,
      servings: this.state.servings
    }
    this.post('/recipe', recipe);
  }

  //AJAX POST Request
  post(url, data) {
    $.ajax({
      type: 'POST',
      url: url,
      data: data
    })
    .done(() => {
      console.log('POST Request: Successful');
    })
    .fail(() => {
      console.log('POST Request: Failed');
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>CookBük</h1>
          <form>
            Recipe Name: <input type="text" onChange={(e)=> {this.setName(e)}}/><br/><br/>
            Cook Time: <input type="text" onChange={(e) => {this.setCookTime(e)}}/><br/><br/>
            Prep Time: <input type="text" onChange={(e) => {this.setPrepTime(e)}}/><br/><br/>
            Servings: <input type="text" onChange={(e) => {this.setServings(e)}}/><br/><br/>

            Add Ingredient: <input type="text" onChange={this.setIngredient}/><br/><br/>
            <input type="button" value="Add Ingredient" onClick={this.setIngredients}/><br/><br/>

            Add Steps: <input type="text" onChange={this.setStep}/><br/><br/>
            <input type="button" value="Add Step" onClick={this.setSteps}/><br/><br/>
            
            <input type="button" value="Submit Recipe" onClick={this.submitRecipe}/>
          </form>
        </div>
        <div>
          Recipe Name: {this.state.name}<br></br>
          Cook Time: {this.state.cookTime}<br></br>
          Prep Time: {this.state.prepTime}<br></br>
          Servings: {this.state.servings}<br></br>
          Ingredients: 
          <ul>
            {this.state.ingredients.map((ingredient) => {
              return (
                <li>{ingredient}</li>
              )
            })}
          </ul><br></br>
          <button onClick={this.undoIngredients}>Undo</button><br></br>
          Steps:
          <ol>
            {this.state.steps.map((step) => {
              return (
                <li>{step}</li>
              )
            })}
          </ol><br></br>
          <button onClick={this.undoSteps}>Undo</button>
        </div>
      </div>
    )
  }
}

export default AddRecipe;