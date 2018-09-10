import React from 'react';
import $ from 'jquery';

import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: false,
      add: false,
      recipeOTD: {},
      recipe: {
        name: 'Spaghetti',
        ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
        steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
        cookTime: '21 minutes',
        prepTime: '10 minutes',
        servings: '2 servings'
      }
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }

  selectRecipe() {
    this.setState({
      select: !this.state.select
    });
  }

  addRecipe() {
    this.setState({
      add: !this.state.add
    });
  }

  renderComponent() {
    if (this.state.select) {
      return <Recipe recipe={this.state.recipe}/>
    } else if (this.state.add) {
      return <AddRecipe/>
    } else {
      //Tae your component goes here
      return (
        <div>
          <h1 onClick={() => this.selectRecipe()}>{this.state.recipe.name}</h1>
          <span>{this.state.recipe.prepTime}</span>
          <span>{this.state.recipe.cookTime}</span>
          <span>{this.state.recipe.servings}</span>
        </div>);
    }
  }

  render() {
    return (
      <div>
        <div>
        Some Freaking Awesome Scrolling Thingy
        </div>
        <ul>
          <li><a>Home</a></li>
          <li><a onClick={() => this.addRecipe()}>Create</a></li>
          <li><a>Logout</a></li>
        </ul>
        <div>
        {this.renderComponent()}
        </div>
      </div>
      );
  }
}

export default App;