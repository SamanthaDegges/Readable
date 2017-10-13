import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { getCategories, votePost, voteComment, getPosts } from '../utils/api'; //USE THESE FUNCTIONS TO UPDATE DB ONLY
import SectionList from './SectionList';
import PostList from './PostList';
import { addPost, upVote, downVote, removePost, addComment, removeComment } from '../actions';

class App extends Component {

  state = {
    categories: [],
    loadingCategories: false,
    posts: [],
    comments: {}
  }

  componentDidMount(){
    getCategories().then((categories) => {
      this.setState(state => ({
        categories: categories
      }))
    })

    getPosts().then((posts) => {
      this.setState(state => ({
        posts: posts
      }))
    })

  }

  categorizePosts = (category) => {
    this.posts.filter((each) => each.category === category)
  }

  rankPosts = () => {
    this.posts.sort((a,b) => a.voteScore - b.voteScore)
    }

  chronoPosts = () => {
    this.posts.sort((a,b) => a.timestamp - b.timestamp)
  }

  onUpVoteComment = (id, option) => {
      //call api and then dispatch action.
      votePost(id, option)
      .then((newVoteScore) => {
        this.setState(() => ({
          voteScore: newVoteScore
        }))
      })
    }

  render() {
    const { categories, posts } = this.state
    const { onUpVote, onDownVote, onRemovePost, onAddPost } = this.props

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
            {categories.map((each)=>
              <PostList
              category = {each.name}
              posts = {posts}
              />
            )}

            {categories !== null && (
            <SectionList
              categories={categories}
            />)}
          </div>
        </div>
      </div>
    )
  }
}

/*
  Default (Root) View
  1should list all available categories, which should link to a category view for that category
  2should list all of the posts ordered by voteScore (highest score first)
  3should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
  4should have a control for adding a new post
*/


/*
  WE MAP STATE TO PROPS SO THAT REDUX CAN MANAGE STATE when we pass in via connect() to make it available to components
  This function returns where the data from all state and store(args) should go in the props.
*/
function mapStateToProps ({ posts, comments }) {
  return null  //return a state object
}

function mapDispatchToProps (dispatch) {
  return {
    //functions that return functions that return the dispatched action
    onAddPost: (data) => dispatch(addPost(data)),
    onUpVote: (data) => dispatch(upVote(data)),
    onDownVote: (data) => dispatch(downVote(data)),
    onRemovePost: (data) => dispatch(removePost(data)),
    onAddComment: (data) => dispatch(addComment(data)),
    onRemoveComment: (data) => dispatch(removeComment(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
