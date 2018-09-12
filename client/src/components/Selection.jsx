import React from 'react';
import $ from 'jquery';

class Selection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
    this.post = this.post.bind(this);
    this.setRecipes = this.setRecipes.bind(this);
  }

  componentDidMount() {
    this.post('/recipes', this.setRecipes);
  }

  setRecipes(data) {
    this.setState({
      recipes: data
    });
  }

  post(url, callback) {
    console.log('this in fetch', this);
    $.ajax({
      type: 'POST',
      url: url,
      data: {
        username: this.props.user
      }
    })
    .done((data) => {
      callback(data);
      console.log('GET SUCCESS');
      console.log('this successful data', data);
      console.log('this is recipes', this.state.recipes)
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