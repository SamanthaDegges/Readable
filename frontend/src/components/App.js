import React, { Component } from 'react';
import '../App.css';
import getCategories from '../utils/api';
import SectionList from './SectionList';

class App extends Component {

state = {
  categories: [],
  loadingCategories: false,
}
/*  searchFood = (e) => {
    if (!this.input.value) {
      return
    }

    e.preventDefault()

    this.setState(() => ({ loadingFood: true }))

    fetchRecipes(this.input.value)
      .then((food) => this.setState(() => ({
        food,
        loadingFood: false,
      })))
  }
  */
generateCategoryList = () => {
  console.log('fired.');
  this.setState(() => ({ loadingCategories: true })) //true while about to load.

  getCategories("test")
  .then((categories) => {
    console.log(categories)
    this.setState(() => ({
      categories: categories,
      loadingCategories: false //false because completed?
    }))
  console.log(categories)})

}

  render() {
    const { categories } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <div>

          <button
            className='icon-btn'
            onClick={this.generateCategoryList}>
          </button>
            {categories !== null && (
            <SectionList
              categories={categories}
              // onSelect={(recipe) => {
              //   selectRecipe({ recipe, day: this.state.day, meal: this.state.meal })
                //this.closeFoodModal()
              //}}
            />)}
          </div>
      </div>

    </div>
    );
  }
}

export default App;

/*

Default (Root)
should list all available categories, which should link to a category view for that category
should list all of the posts ordered by voteScore (highest score first)
should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
should have a control for adding a new post*/
