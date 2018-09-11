import React from 'react';
import $ from 'jquery';

import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import Selection from './Selection.jsx';

import sample from '../../../util/sampleData.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: '',
      recipeOTD: {},
      recipe: {},
      recipes: sample
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  selectRecipe(recipe) {
    this.setState({
      recipe: recipe
    });
    this.changeView('overview');
  }

  renderComponent() {
    if (this.state.view === 'overview') {
      return <Recipe recipe={this.state.recipe}/>
    } else if (this.state.view === 'add') {
      return <AddRecipe/>
    } else {
      return (
        <div>
          <Selection selectRecipe={this.selectRecipe} recipes={this.state.recipes}/>
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
          <li><a onClick={() => this.changeView('')}>Home</a></li>
          <li><a onClick={() => this.changeView('add')}>Create</a></li>
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