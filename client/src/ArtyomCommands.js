// ArtyomCommands.js
export default class ArtyomCommandsManager {
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance;
  }

  loadCommands(recipeInfo) {
    let Artyom = this._artyom;
    console.log('RECIPE INFO:', recipeInfo.recipeList.length);

    const recipeNames = recipeInfo.recipeList.map(recipe => recipe.name);

    return Artyom.addCommands([
      {
        indexes: ["What recipes do I have?"],
        action: () => {
          Artyom.say("You have " + recipeNames);
        },
      },
      {
        indexes: ["How many recipes do I have in my cookbook?"],
        action: () => {
          Artyom.say("You have " + recipeInfo.recipeList.length + " recipes in your cookbook");
        },
      },
    ]);
  }
}
