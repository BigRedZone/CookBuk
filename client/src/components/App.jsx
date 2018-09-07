import React from 'react';
import $ from 'jquery';
import Recipe from '../components/Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ['Spaggheti', 'Cereal', 'Korean BBQ', 'Sushi'],
      recipe: { name: 'Spaghetti',
        ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
        steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
        cookTime: '21 minutes',
        prepTime: '10 minutes'
      },
      recipeInput: { name: 'Cereal',
        ingredients: ['Milk', 'Cereal'],
        steps: ['Add milk to bowl, add Cereal to bowl'],
        cookTime: '2 minutes',
        prepTime: '2 minutes'
      },
      ingredient: '',
      ingredients: [],
      step: '',
      steps: [],
      cookTime: '',
      prepTime: '',
    }
    this.setRecipes = this.setRecipes.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
    // this.updateRecipe = this.updateRecipe.bind(this);
    // this.deleteRecipe = this.deleteRecipe.bind(this);
    this.setPrepTime = this.setPrepTime.bind(this);
    this.setCookTime = this.setCookTime.bind(this);
    this.setIngredient = this.setIngredient.bind(this);
    this.setStep = this.setStep.bind(this);
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
    //componentReceivedData
      //invoke getIngredients
      //invoke getSteps
  }

  setCookTime(e) {
    this.setState({
      cookTime: event.target.value
    });
    console.log('cooktime: ' , this.state.cookTime);
  }

  setPrepTime(e) {
    this.setState({
      prepTime: e.target.value
    });
    console.log('prepTime: ' , this.state.prepTime);
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

  // getIngredients(data) {

  // }

  // getSteps(data) {

  // }

  post(url, data) {
    $.ajax({
      type: 'POST',
      url: url,
      data: data
    })
    .done(() => {
      console.log(`Succesful Post to Server for ${callback}`)
    });
  }

  addRecipe() {
    
  }

  addRecipeName() {

  }




  
  addRecipeName() {

  }



  addIngredients() {
    this.setState({
      ingredients: this.state.ingredients.concat(this.state.ingredient)
    })
    console.log(this.state.ingredients);
  }
  addSteps() {
    //sets state of current Step.
  }

  // this.setState({ 
  //   arrayvar: this.state.arrayvar.concat([newelement])
  // })

  setIngredient(e) {
    this.setState({
      ingredient: [e.target.value]
    });
    console.log('currentIngredient: ' , this.state.ingredient);
  }

  setStep(e) {
    this.setState({
      step: [e.target.value]
    });
    console.log('currentStep: ' , this.state.step);
  }

  render() {
    return (
      <div>
        <div>
          <h1>CookBük</h1>
          <select>
            {this.state.recipes.map((recipe) => {
              <option>recipe</option>
            })}
            {/* <option>placeholder 1</option>
            <option>placeholder 2</option>
            <option>placeholder 3</option> */}
          </select>
          <form>
            Recipe Name: <input type="text"/><br/><br/>
            Cook Time: <input type="text" onChange={(e) => {this.setCookTime(e)}}/><br/><br/>
            Prep Time: <input type="text" onChange={(e) => {this.setPrepTime(e)}}/><br/><br/>
            Add Ingredient: <input type="text" onChange={this.setIngredient}/><br/><br/>
            <input type="button" value="Add Ingredient" onClick={() => {console.log(this.state.ingredient)}}/><br/><br/>
            Add Steps: <input type="text" onChange={this.setStep}/><br/><br/>
            <input type="button" value="Add Step" onClick={() => {console.log(this.state.step)}}/><br/><br/>
            
            <input type="button" value="Submit Recipe" onClick={(e) => {console.log('submit works')}}/>
          </form>
        </div>
        <Recipe 
          update={this.updateRecipe}
          delete={this.deleteRecipe}
          recipe={this.state.recipe}
        />
      </div>
    )
  }
}

export default App;