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
        indexes: ["How long is prep time?"],
        action: () => {
          Artyom.say(`Prep time is ${recipeInfo.recipe.prepTime}`);
        }
      },
      {
        indexes: ["How long is cook time?"],
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
          console.log('sup dude');
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
        indexes: ['get me out of here'],
        action: () => {
          recipeInfo.clickExit();
        }
      }
    ]);
  }
}
