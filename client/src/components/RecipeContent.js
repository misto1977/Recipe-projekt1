import React, { Component } from 'react';
// components
import Sidebar from "../components/Sidebar";

class Recipe extends Component {

  constructor(props){
    super(props);

    this.state = { recipe: [] };
  }

  componentDidMount() {
    // fetch the recipe by id
    fetch(`/recipe/${this.props.id}`)
    .then( res => res.json() )
    .then( recipe => this.setState({ recipe: recipe }) );
  }

  isFetchedRecipe = () => {
    if(this.state.recipe === undefined || this.state.recipe.length == 0) {
      return false;
    }
    return true;
  }

  renderBody = (recipe) => {
    return (
      <React.Fragment>
        <div className="col-lg-9">
          <div className="bloglist singlepost">
            <p><img src={"/images/recipes/" + recipe.urlToImg} alt={recipe.name} /></p>
            <h1>{recipe.name}</h1>
            <div className="postmeta">
              <ul>
                <li><a href="asd"><i className="icon_folder-alt"></i> {recipe.category}</a></li>
              </ul>
            </div>
            <div className="post-content">
              <div className="dropcaps">
                {recipe.instructions.map((inst, i) => {
                  return (
                    <p key={i}>{inst}</p>
                  )
                })}
              </div>
              <div className="col-lg-6">
                <ul className="bullets">
                  {recipe.ingredients.map((ing, i) => {
                    return (
                      <li key={i}>{ing.name}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Sidebar similar={recipe} />
      </React.Fragment>
  )}

  render() {

    return (
      <React.Fragment>
        {this.isFetchedRecipe() ?
          this.renderBody(this.state.recipe)
        : <p>No such recipe</p>
        }
      </React.Fragment>
    );
  }
}

export default Recipe;
