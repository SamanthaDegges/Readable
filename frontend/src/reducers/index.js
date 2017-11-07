import { combineReducers } from 'redux'

import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  UP_VOTE,
  DOWN_VOTE,
  GET_POSTS,
  GET_COMMENTS,
  EDIT_POST
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

function Comments (state = [], action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS:
    return {
      ...state,
      [comments] : comments.map((comment) => comment)
    }
    default:
    return state
  }
}

function postsReducer (state = [], action) {
  const { posts } = action
  switch (action.type) {
    case GET_POSTS:
    // console.log('switch: ',posts, action.type);
      return {
        ...state,
        [posts] : posts.filter((p) => p.deleted === false).sort((a,b) => b.voteScore - a.voteScore)
      }
      //SHOULD PROBABLY FILTER POSTS SO THAT ONLY THE IS:DELETED === FALSE ARE RETURNED
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
  console.log('passed into REDUCER: ',action);

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
    case EDIT_POST:
    console.log('editing post, in reducer, still ', action, action.post.title, action.post);
        return {
          ...state,
          title: action.post.title,
          body: action.post.body,
          id: action.post.id,
          category: action.post.category
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
  postsReducer,
  Comments
})
