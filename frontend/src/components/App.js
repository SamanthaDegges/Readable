import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import getCategories from '../utils/api';
import SectionList from './SectionList';
import { addPost, upVote, downVote, removePost } from '../actions';

class App extends Component {

  state = {
    categories: [],
    loadingCategories: false,
  }

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
    const { vote, onRemovePost, onAddPost } = this.props

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

/*
let category be passed in on click; otherwise default to all categories and rerender
Default (Root)
should list all available categories, which should link to a category view for that category
should list all of the posts ordered by voteScore (highest score first)
should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
should have a control for adding a new post*/


//WE MAP STATE TO PROPS SO THAT REDUX CAN MANAGE STATE when we pass in via connect() to make it available to components
function mapStateToProps ({ posts, comments }) {
  return null  //return a state object
}

//WE DISPATCH TO PROPS SO ACTIONs CAN BE DISPATCHED FROM HERE?
function mapDispatchToProps (dispatch) {
  return {//functions that return functions that return the dispatched action
    onAddPost: (data) => dispatch(addPost(data)),
    onUpVote: (data) => dispatch(upVote(data)),
    onDownVote: (data) => dispatch(downVote(data)),
    onRemovePost: (data) => dispatch(removePost(data))
  }
}

//Connect uses currying and allows these Redux to pass data from store to components
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
