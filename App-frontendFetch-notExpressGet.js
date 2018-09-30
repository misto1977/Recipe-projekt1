import React, { Component } from 'react';

class App extends Component {

  state = { recipes: [] }

  componentDidMount() {
    fetch('/json/recipes.json')
      .then( res => res.json() )
      .then( recipes => this.setState({ recipes }) );
  }

  render() {
    return (
      <div className="App">
        <h1>Recipes</h1>
        <ul>
          {this.state.recipes.map( (recipe, i) =>
            <li key={i}>{recipe.name}<img src={"images/recipes/" + recipe.urlToImg} /></li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
