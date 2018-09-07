//database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cookbook', { useNewUrlParser: true });

const recipeSchema = mongoose.Schema({
  name: String,
  ingredients: String,
  steps: String,
  prepTime: String,
  cookTime: String,
  servings: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const save = (recipe) => {
  let newRecipe = new Recipe({
    name: 'test name',
    ingredients: 'test ingredients',
    steps: 'test steps',
    prepTime: 'test prepTime',
    cookTime: 'test cookTime',
    servings: 'test servings'
  });

  newRecipe.save((err, recipe) => {
    if (err) {
      console.log(err);
    } else {
      console.log('database connected');
    }
  });
}

module.exports.Recipe = Recipe;
module.exports.save = save;