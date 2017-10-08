import React, { Component } from 'react';
import '../App.css';
import getCategories from '../utils/api';
import Sections from './Sections';

class App extends Component {

state = {
  categories: [],
  loadingCategories: false
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
            <Sections
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
