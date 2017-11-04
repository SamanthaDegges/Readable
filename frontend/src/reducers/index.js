import { combineReducers } from 'redux'

import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  UP_VOTE,
  DOWN_VOTE,
  GET_POSTS,
} from '../actions'

const initialCommentState = {
  parentId: "",
  timestamp: Date.now(),
  body: '',
  author: '',
  voteScore: 1,
  deleted: false,
  parentDeleted: false
}

function commentReducer (state = initialCommentState, action) {
  const { parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = action

  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [parentId]: parentId,
        [body]: body,
        [author]: ''
      }
    case REMOVE_COMMENT:
      return  {
        ...state,
        [deleted]: true,
        [parentDeleted]: parentDeleted
      }
    default:
    return state
  }
}

function postsReducer (state = [], action) {
  const { posts } = action
  switch (action.type) {
    case GET_POSTS:
    console.log('switch: ',posts, action.type);
      return {
        ...state,
        [posts] : posts.map((post) => post).sort((a,b) => b.voteScore - a.voteScore)
      }
      // case ADD_POST:
      // return [
      //   ...state,
      //   {
      //     post: action.post
      //   }
      // ]
      default:
      return state
  }
}
const initialPostState = {
  "id": "",
  "timestamp": Date.now(),
  "title": "",
  "body": "",
  "author": "",
  "category": "",
  "voteScore": 1,
  "deleted": false,
  "childComments": []
}

function postReducer (state = initialPostState, action) {
  //for editing post content
  const { id, title, body, author, category, deleted } = action

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [id]: id,
        [title]: title,
        [body]: body,
        [author]: author,
        [category]: category
      }
    case REMOVE_POST:
      return {
        ...state,
        deleted: true
      }
    default:
    return state
  }
}

function voteReducer (state = {}, action) { //for comments and posts?
  const { voteScore, id } = action

  switch (action.type) {
    case DOWN_VOTE:
      return {
        ...state,
        id,
        voteScore: voteScore - 1
      }
    case UP_VOTE:
      return {
        ...state,
        id,
        voteScore: voteScore + 1
      }
    default:
    return state
  }
}


export default combineReducers({
  commentReducer,
  postReducer,
  voteReducer,
  postsReducer
})
