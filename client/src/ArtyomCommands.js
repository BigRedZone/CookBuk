// ArtyomCommands.js
export default class ArtyomCommandsManager {
  constructor(ArtyomInstance) {
    this.artyom = ArtyomInstance;
    this.counter = 0;
  }

  loadCommands(recipeInfo) {
    const Artyom = this.artyom;
    return Artyom.addCommands([
      {
        indexes: ['what ingredients do I need?'],
        action: () => {
          Artyom.say(`You need ${recipeInfo.recipe.ingredients}`);
        },
      },
      {
        indexes: ['what is the prep time?'],
        action: () => {
          Artyom.say(`Prep time is ${recipeInfo.recipe.prepTime}`);
        },
      },
      {
        indexes: ['what is the cook time?'],
        action: () => {
          Artyom.say(`Cook time is ${recipeInfo.recipe.cookTime}`);
        },
      },
      {
        indexes: ['thank you'],
        action: () => {
          Artyom.say('You\'re welcome');
        },
      },
      {
        indexes: ['lets begin'],
        action: () => {
          Artyom.say(`Step ${this.counter + 1 + ', ' + recipeInfo.recipe.steps[this.counter]}`);
        }
      },
      {
        indexes: ['what\'s next'],
        action: () => {
          recipeInfo.clickNext();
          this.counter++;
          Artyom.say(`Step ${this.counter + 1 + ', ' + recipeInfo.recipe.steps[this.counter]}`)
        }
      },
      {
        indexes: ['what\'s the previous step'],
        action: () => {
          recipeInfo.clickPrev();
          this.counter--;
          Artyom.say(`Step ${this.counter + 1 + ', ' + recipeInfo.recipe.steps[this.counter]}`)
        }
      },
      {
        indexes: ['what\'s the first step'],
        action: () => {
          recipeInfo.clickFirst();
          this.counter = 0;
          Artyom.say(`Step ${this.counter + 1 + ', ' + recipeInfo.recipe.steps[this.counter]}`)
        }
      },
      {
        indexes: ['take me to the last step'],
        action: () => {
          recipeInfo.clickLast();
          this.counter = recipeInfo.recipe.steps.length - 1;
          Artyom.say(`Step ${this.counter + 1 + ', ' + recipeInfo.recipe.steps[this.counter]}`)
        }
      },
      {
        indexes: ['return to recipe overview'],
        action: () => {
          recipeInfo.clickExit();
        },
      },
    ]);
  }
}
