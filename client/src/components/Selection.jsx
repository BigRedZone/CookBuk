import React from 'react';
import $ from 'jquery';

class Selection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
    this.fetch = this.fetch.bind(this);
    this.setRecipes = this.setRecipes.bind(this);
  }

  componentDidMount() {
    this.fetch('/recipes', this.setRecipes);
  }

  setRecipes(data) {
    this.setState({
      recipes: data
    });
  }

  fetch(url, callback) {
    console.log(this);
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
  
  render () {
    console.log('props', this.props);
    return (
      <div>
        <h3>Welcome {this.props.user.split(' ')[0]}</h3>
        {
          this.props.recipes.map((recipe) => 
            <div>
            <h1 onClick={() => this.props.selectRecipe(recipe)}>{recipe.name}</h1>
            <span>{recipe.prepTime}</span>
            <span>{recipe.cookTime}</span>
            <span>{recipe.servings}</span>
            </div>
          )
        }
      </div>
    );
  }
}

export default Selection;