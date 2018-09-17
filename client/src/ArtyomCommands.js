// ArtyomCommands.js
export default class ArtyomCommandsManager {
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance;
  }

  loadCommands(recipeInfo) {
    let Artyom = this._artyom;
    console.log('this is recipe info', recipeInfo);
    console.log(recipeInfo.recipe)
    return Artyom.addCommands([
      {
        indexes: ["What ingredients do I need?"],
        action: () => {
          Artyom.say(`You need ${recipeInfo.recipe.ingredients}`);
        }
      },
      {
        indexes: ["What is the prep time?"],
        action: () => {
          Artyom.say(`Prep time is ${recipeInfo.recipe.prepTime}`);
        }
      },
      {
        indexes: ["What is the cook time?"],
        action: () => {
          Artyom.say(`Cook time is ${recipeInfo.recipe.cookTime}`);
        }
      },
      {
        indexes: ["Thank you"],
        action: () => {
          Artyom.say(`You're welcome`);
        },
      },
      {
        indexes: ['lets Begin'],
        action: () => {
          Artyom.say(`Step ${recipeInfo.currentStep + 1 + ', ' + recipeInfo.recipe.steps[0]}`);
        }
      },
      {
        indexes: ['what\'s next'],
        action: () => {
          recipeInfo.clickNext();
        }
      },
      {
        indexes: ['what\'s the previous step'],
        action: () => {
          recipeInfo.clickPrev();
        }
      },
      {
        indexes: ['what\'s the first step'],
        action: () => {
          recipeInfo.clickFirst();
        }
      },
      {
        indexes: ['take me to the last step'],
        action: () => {
          recipeInfo.clickLast();
        }
      },
      {
        indexes: ['Return to recipe overview'],
        action: () => {
          recipeInfo.clickExit();
        }
      }
    ]);
  }
}