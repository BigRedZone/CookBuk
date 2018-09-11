import React from 'react';
import $ from 'jquery';
import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import Selection from './Selection.jsx';
import SignIn from './SignIn.jsx';

import sample from '../../../util/sampleData.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      view: '',
      recipeOTD: {},
      recipe: {},
      recipes: sample
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
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

  handleSignOut(fullName) {
    
  }
  
  handleSignIn(fullName) {
    this.setState({
      fullName: fullName
    })
    console.log(this.state.fullName);
  }

  render() {
    return (
      <div>
        <SignIn handleSignIn={this.handleSignIn}/>
        <h3>Welcome {this.state.fullName.split(' ')[0]}</h3>
        <ul>
          <li><a onClick={() => this.changeView('')}>Home</a></li>
          <li><a onClick={() => this.changeView('add')}>Create</a></li>
          {/* <li><a onClick={() => }>Logout</a></li> */}
        </ul>
        <div>
          {this.renderComponent()}
        </div>
      </div>
      );
  }
}

export default App;