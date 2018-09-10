import React from 'react';
import $ from 'jquery';

import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectRecipe: false,
      addRecipe: false,
      recipeOTD: {}
    };

    this.renderComponent = this.renderComponent.bind(this);
  }



  renderComponent() {
    if (this.state.selectRecipe) {
      return ('shg');
    } else if (this.state.addRecipe) {
      return ('hs');
    } else {
      return ('hu');
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
          <li><a>Create</a></li>
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