import React from 'react';
import $ from 'jquery';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
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
<<<<<<< Updated upstream
      recipe: {},
      recipes: sample
=======
      recipe: {
        fullName: '',
        name: 'Spaghetti',
        ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
        steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
        cookTime: '21 minutes',
        prepTime: '10 minutes',
        servings: '2 servings'
      }
>>>>>>> Stashed changes
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
<<<<<<< Updated upstream
=======
    this.addRecipe = this.addRecipe.bind(this);
    this.setName = this.setName.bind(this);
>>>>>>> Stashed changes
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


  responseGoogle(response) {
    console.log(response);
    console.log(this);
    this.setName(response);
    console.log(this.state.fullName);
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

  setName(name) {
    this.setState({
      name: name
    })
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1092722979964-8pjuqqchc7d0qlfh0iaeisqkjp2bb1f1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <h3>Welcome {this.state.fullName}</h3>
        <ul>
<<<<<<< Updated upstream
          <li><a onClick={() => this.changeView('')}>Home</a></li>
          <li><a onClick={() => this.changeView('add')}>Create</a></li>
          <li><a>Logout</a></li>
=======
          <li><a>Home</a></li>
          <li><a onClick={() => this.addRecipe()}>Create</a></li>
>>>>>>> Stashed changes
        </ul>
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        >
        </GoogleLogout>
        <div>
        {this.renderComponent()}
        </div>
      </div>
      );
  }
}

export default App;