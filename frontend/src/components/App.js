import React, { Component } from 'react'
import { Route, Link, } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'
import { getCategories, votePost, createPost, deletePost, editPost, voteComment, getPosts, createComment, editComment, getComments, getComment, deleteComment } from '../utils/api'
import SectionList from './SectionList'
import Post from './Post'
import MainView from './MainView'
import Section from './Section'
import { addPost, upVote, downVote, RemovePost, addComment, removeComment, GetPosts, GetComments, EditPost  } from '../actions'

class App extends Component {

  state = {
    filter: "",
    categories: [],
    showPostsByCategory: false,
    showPostsByDate: false
  }

  componentWillMount(){
    getCategories().then((categories) => {
      this.setState(state => ({
        categories: categories
      }))
    })

    getPosts().then((posts) => {
      this.props.onGetPosts(posts)
      posts && posts.map((p) => {
        new Promise((resolve, reject) => {
          resolve(this.props.onGetComments(p.id))
        }).then((data) => {
          console.log(data)
        }).catch((error) => {
          console.log('GET COMMENTS PROMISE REJECTED, ', error)
        })
      })
    })
  }

  render() {
    const { showPostsByCategory, showPostsByDate, categories, filter } = this.state
    const { posts, comments, onUpVotePost, onDownVotePost, onRemovePost, onEditPost} = this.props
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
              <Route exact path="/"
              render = {()=>(
                <MainView
                  comments = {comments}
                  filter = {filter}
                  categories = {categories}
                  byCategory = {showPostsByCategory}
                  byDate = {showPostsByDate}
                  posts = {posts}
                  onClickUp = {(post) => { onUpVotePost({id: post.id, voteScore: post.voteScore}) }}
                  onClickDown = {(post) => { onDownVotePost({id: post.id, voteScore:post.voteScore}) }}
                  onClickDeleteP = {(post) => {onRemovePost(post)}}
                  onClickEditP = {(testP) => {onEditPost(testP)}}
                  onSort = {(posts, selectedFilter) => {
                    this.setState({
                     filter: selectedFilter
                    })
                    switch (selectedFilter) {
                      case "recent":
                      this.setState({
                        showPostsByCategory: false,
                        showPostsByDate: true
                      })
                        return posts.sort((a,b) => b.timestamp - a.timestamp)
                      case "category":
                      this.setState({
                       showPostsByCategory: true,
                       showPostsByDate: false
                      })
                        return posts
                      default:
                        console.log('default');
                        this.setState({
                          showPostsByCategory: false,
                          showPostsByDate: false
                        })
                        return posts.sort((a,b) => b.voteScore - a.voteScore)
                    }
                  }}
                />
              )}/>

              <Route exact path="/react"
              render = {()=>
                <Section
                category = "react"
                comments = {comments}
                posts = {posts}
                onClickUp = {(post) => {onUpVotePost({id: post.id, voteScore: post.voteScore})}}
                onClickDown = {(post) => {onDownVotePost({id: post.id, voteScore:post.voteScore})}}
                onClickDeleteP = {(post) => {onRemovePost(post)}}
                onClickEditP = {(post) => {onEditPost(post)}}
                />
                }
              />
              <Route path="/redux"
                render = {()=>
                  <Section
                  category = "redux"
                  comments = {comments}
                  posts = {posts}
                  onClickUp = {(post) => {onUpVotePost({id: post.id, voteScore: post.voteScore})}}
                  onClickDown = {(post) => {onDownVotePost({id: post.id, voteScore:post.voteScore})}}
                  onClickDeleteP = {(post) => {onRemovePost(post)}}
                  onClickEditP = {(post) => {onEditPost(post)}}
                  />
                }
              />
              <Route path="/udacity"
                render = {()=>
                  <Section
                  category = "udacity"
                  comments = {comments}
                  posts = {posts}
                  onClickUp = {(post) => {onUpVotePost({id: post.id, voteScore: post.voteScore})}}
                  onClickDown = {(post) => {onDownVotePost({id: post.id, voteScore:post.voteScore})}}
                  onClickDeleteP = {(post) => {onRemovePost(post)}}
                  onClickEditP = {(post) => {onEditPost(post)}}
                  />
                }
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
  const { postReducer, postsReducer, voteReducer, Comments} = store
  let comments = !Comments ? null : Object.values(Comments).reduce((a, b) => a.concat(b), [])
  let posts = !postsReducer ? null : Object.values(postsReducer)[0]
  let newPostVote = !voteReducer.id ? false : voteReducer
  let updatedPost = postReducer && postReducer.deleted === false ? postReducer : "fail"

    try {
      //console.log(history);
      // console.log('Checking ',updatedPost, postReducer) //returns blank
      // console.log('newPostVote is: ', newPostVote, newPostVote.id)
      // console.log('---OWNPROPS IS: ', ownprops)
      //console.log('COMMENTS ARE ', store.Comments);
      //console.log(newPostVote.id === posts[0].id, posts[0].voteScore, newPostVote.voteScore)
    } catch(e){}

    if (posts && newPostVote) {
      posts = posts.map((p) => {
        if (p.id === newPostVote.id ) {
          p.voteScore = newPostVote.voteScore
          return p
        }
        return p
      })
    }

    if (posts && updatedPost) {
      posts = posts.map((p) => {
        if (p.id === updatedPost.id){
          console.log('TESTING match ',p, updatedPost);
          p.body = updatedPost.body
          p.category = updatedPost.category
          p.title = updatedPost.title
          return p
        }
        return p
      })
    }

  return {
    posts: posts && posts.filter((p)=>p.deleted === false),
    comments: comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAddPost: (data) => dispatch(addPost(data)),
    onUpVotePost: (data) => votePost(data.id, "upVote").then(dispatch(upVote(data))),
    onDownVotePost: (data) => votePost(data.id, "downVote").then(dispatch(downVote(data))),
    onRemovePost: (post) => deletePost(post.id).then((data)=>dispatch(RemovePost({post: data}))),
    onAddComment: (data) => dispatch(addComment(data)),
    onRemoveComment: (data) => dispatch(removeComment(data)),
    onUpVoteComment: (id, option) => dispatch(voteComment(option)),
    onGetComments: (pId) => getComments(pId).then((data)=>dispatch(GetComments({comments: data}))),
    onEditPost: (post) => editPost(post.id, post).then((data)=>dispatch(EditPost(data.edit))), //sends nested into edit of each post.

    //
    // onGetComments: function(data) {
    //   console.log('-------DATA 1', data)
    //   getComments(data).then(function(data) {
    //     console.log('-------DATA 2: ', data)
    //     // console.log(dispatch(GetComments({comments: data})));
    //     return dispatch(GetComments({comments: data}))
    //   })
    // },

    onGetPosts: (data) => dispatch(GetPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
