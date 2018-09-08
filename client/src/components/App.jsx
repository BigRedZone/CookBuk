import React from 'react';
import $ from 'jquery';
import Recipe from '../components/Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ['Spaghetti', 'Cereal', 'Korean BBQ', 'Sushi'],
      recipe: {
        name: 'Spaghetti',
        ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
        steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
        cookTime: '21 minutes',
        prepTime: '10 minutes'
      },
      name: '',
      ingredients: [],
      steps: [],
      cookTime: '',
      prepTime: '',
      ingredient: '',
      step: '',
    }
    this.setRecipes = this.setRecipes.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
    this.setName = this.setName.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.setSteps = this.setSteps.bind(this);
    this.setCookTime = this.setCookTime.bind(this);
    this.setPrepTime = this.setPrepTime.bind(this);
    this.setIngredient = this.setIngredient.bind(this);
    this.setStep = this.setStep.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.post = this.post.bind(this);
  }

  //Initialize
  componentDidMount() {
    this.getRecipes();
  }

  //GET requests
  getRecipes() {
    this.fetch('/homepage', this.setRecipes);
  }

  getRecipe() {
    this.fetch('/recipe', this.setRecipe);
  }

  //Set States
  setRecipes(data) {
    this.setState({
      recipes: data
    });
  }

  setRecipe(data) {
    this.setState({
      recipe: data
    });
  }

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

  submitRecipe() {
    let recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      cookTime: this.state.cookTime,
      prepTime: this.state.prepTime
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

  deleteRecipe() {

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

            Add Ingredient: <input type="text" onChange={this.setIngredient}/><br/><br/>
            <input type="button" value="Add Ingredient" onClick={this.setIngredients}/><br/><br/>

            Add Steps: <input type="text" onChange={this.setStep}/><br/><br/>
            <input type="button" value="Add Step" onClick={this.setSteps}/><br/><br/>
            
            <input type="button" value="Submit Recipe" onClick={this.submitRecipe}/>
          </form>
        </div>
        <Recipe 
          recipe={this.state.recipe}
        />
      </div>
    )
  }
}

export default App;

{/* <select>
            {this.state.recipes.map((recipe) => {
              <option>recipe</option>
            })}
            /* <option>placeholder 1</option>
            <option>placeholder 2</option>
          <option>placeholder 3</option> */}