# CookBük

> Recipe &amp; Pantry Inventory Application

## Team Big Red

  - __Product Owner__: Jhia Turner
  - __Scrum Master__: Nate Ong
  - __Development Team Members__: Jhia Turner, Nate Ong, Taehwan Lim, Nathan Vang

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Getting Started

* 1. Go to the assigned server's url.
* 2. Once there you'll be prompted to sign in with a Google account before you can access anything else
* 3. After signing in the app will retrieve all recipes that have been assigned to your name
* 4. You have the option to:
    - Select a recipe
    - Create a new recipe
    - Log out

> Adding A New Recipe

* 1. From the home page click on the create button
* 2. On this page you may fill out whichever fields you please, but the name of the recipe is a required field!
* 3. Ingredients and steps must be added one at a time
* 4. You may remove the last input of either ingredients or steps by clicking the undo button under each of their respective categories on the right side
* 5. Once you are finished with all inputs, simply click "Add Recipe!" and the recipe will be added
    - This will also bring you back to the homepage showing all of your recipes with the most recently added one at the bottom


> Selecting A Recipe

* 1. From the home page click on the title of a recipe
* 2. This will bring you to the overview of the selected recipe, which will show the following information:
    - The title
    - The ingredients required for each recipe
    - The amount of time a recipe may take to prepare
    - The amount of time a recipe may take to cook
    - The amount of servings the recipe aims to provide
* 3. Within this page you are also given access to either start the selected recipe or edit it

> Editing A Recipe

* 1. From the recipe overview page, click on Edit
* 2. This will bring you to the edit page, with the following fields
    - The title
        - This is the only required field that needs to be filled
    - Ingredients involved with the recipe
        - Each ingredient should be separated by a comma
    - The preparation time
    - The cook time
    - The amount of servings the recipe expects to make
    - The steps involved in making this recipe
        - Each step should be separated by a comma

> Starting A Recipe

* 1. From the recipe overview page, click on Start
* 2. This will bring you to the beginning of the steps page
* 3. You are given the choice of manually going through each step, OR activating voice commands by clicking Start Kitchen Assistant
    - Manually:
      - To go to the next step, click Next
      - To go to the previous step, click Prev.
      - To go to the first step, click First
      - To go to the last step, click Last
      - To go exit the recipe, click Exit
    - Voice Commands:

## Requirements

> Dependencies:

* artyom.js: 1.0.6
* axios: 0.18.0
* body-parser: 1.18.3
* express: 4.16.3
* jquery: 3.3.1
* mongoose: 5.2.13
* react: 16.4.2
* react-dom: 16.4.2
* request: 2.88.0

> Dev Dependencies:

* babel/core: 7.0.0,
* babel/preset-env: 7.0.0,
* babel/preset-react: 7.0.0,
* babel-loader: 8.0.2,
* chai: 4.1.2,
* mocha: 5.2.0,
* webpack: 4.17.2,
* webpack-cli: 3.1.0,
* webpack-dev-server: 3.1.7

## Development

### Installing Dependencies

From within the root directory type in the following code:

```
npm install
```

### Roadmap

View the project roadmap [here](https://waffle.io/BigRedZone/CookBuk)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.