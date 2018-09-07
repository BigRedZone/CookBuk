import React from 'react';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextClicked: false,
      prevClicked: false,
      firstClicked: false,
      lastClicked: false
    }
    console.log(props);
  }
  render() {

    return (
      <div>
        <h3>CookBük</h3>
        <a href="/homepage"><h1>Recipe Name</h1></a>
        <div>
          <h2>Step 1:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>First</button>
          <button>Prev.</button>
          <button>Next</button>
          <button>Last</button>
          <a href="/recipe">Exit</a>
        </div>
      </div>
    )
  }
}

export default Steps;