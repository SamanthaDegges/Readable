import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { getCategories, votePost, createPost, deletePost, editPost, voteComment, getPosts, createComment, editComment, getComments, getComment, deleteComment } from '../utils/api' //USE THESE FUNCTIONS TO UPDATE DB ONLY
import SectionList from './SectionList'
import PostList from './PostList'
import MainView from './MainView'
import { addPost, upVote, downVote, removePost, addComment, removeComment, GetPosts  } from '../actions'

class App extends Component {

  state = {
    filter: "",
    categories: [],
    comments: [],
    showPostsByCategory: false,
    showPostsByDate: false,
    showPostsByVote: true
  }

  componentDidMount(){
    getCategories().then((categories) => {
      this.setState(state => ({
        categories: categories
      }))
    })

    getPosts().then((posts) => {
      this.props.onGetPosts(posts)
    })
  }

  categorizePosts = (category, posts ) => {
    posts.filter((each) => each.category === category)
  }

  rankPosts = () => {
    this.posts.sort((a,b) => a.voteScore - b.voteScore)
    }

  chronoPosts = () => {
    this.posts.sort((a,b) => a.timestamp - b.timestamp)
  }

  render() {
    const { showPostsByCategory, showPostsByVote, showPostsByDate, categories, filter } = this.state
    const { posts, allComments, onUpVotePost, onDownVotePost, onRemovePost, onAddPost, onGetPosts } = this.props
    return (
      <div className="App">
          <div className="row">
            <div id="sideBar" className = "sidebar-offcanvas col-xs-6 col-md-2">
            {categories !== null && (
              <SectionList
              categories={categories}
              />)}
              </div>
              <div id="mainColumn" className = "col-xs-12 col-md-8 offset-md-1">
                  <MainView
                    filter = {filter}
                    categories = {categories}
                    byCategory = {showPostsByCategory}
                    byDate = {showPostsByDate}
                    byVote = {showPostsByVote}
                    posts = {posts}
                    onClickUp = {(post) => { onUpVotePost({id: post.id, voteScore: post.voteScore}) }}
                    onClickDown = {(post) => { onDownVotePost({id: post.id, voteScore:post.voteScore}) }}
                    onSort = {(posts, selectedFilter) => {
                      console.log(selectedFilter, posts)
                      this.setState({
                       filter: selectedFilter
                      })
                      switch (selectedFilter) {
                        case "recent":
                        this.setState({
                          showPostsByCategory: false,
                          showPostsByVote: false,
                          showPostsByDate: true
                        })
                          return posts
                        case "category":
                        this.setState({
                         showPostsByCategory: true,
                         showPostsByVote: false,
                         showPostsByDate: false
                        })
                          return posts
                        default:
                        this.setState({
                          showPostsByCategory: false,
                          showPostsByVote: true,
                          showPostsByDate: false
                        })
                          return posts
                      }
                    }}

                  />
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

function mapStateToProps (store, ownprops) {
  const { postsReducer, voteReducer } = store
  let posts = !postsReducer ? null : Object.values(postsReducer)[0]
  let newData = !voteReducer.id ? false : voteReducer

    try {
      console.log('newData is: ', newData, newData.id)
      console.log('---OWNPROPS IS: ', ownprops)
      //console.log(newData.id === posts[0].id, posts[0].voteScore, newData.voteScore)
    } catch(e){}

    if (posts && newData) {
      posts = posts.map((p) => {
        if (p.id === newData.id ) {
          p.voteScore = newData.voteScore
          return p
        }
        return p
      })
  }

  return {
    posts: posts
  }
}
    // compponenet will receive props everytime the reducer is run so
    // let voteScore = voteReducer.filter(score)=> score.id === post.id

function mapDispatchToProps (dispatch) {
  return {
    onAddPost: (data) => dispatch(addPost(data)),
    onUpVotePost: (data) => dispatch(upVote(data)),
    onDownVotePost: (data) => dispatch(downVote(data)),
    onRemovePost: (data) => dispatch(removePost(data)),
    onAddComment: (data) => dispatch(addComment(data)),
    onRemoveComment: (data) => dispatch(removeComment(data)),
    onUpVoteComment: (id, option) => dispatch(voteComment(option)),
    onGetPosts: (data) => dispatch(GetPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
