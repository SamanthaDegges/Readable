import { combineReducers } from 'redux'

import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  UP_VOTE,
  DOWN_VOTE
} from '../actions'

const initialCommentState = {
  parentId: "",
  timestamp: Date.now(),
  body: '',
  author: '',
  voteScore: 0,
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

/*
//reducer
function food (state = {}, action) {
  switch (action.type) {
    case ADD_RECIPE :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    default :
      return state
  }
}
*/
const initialPostState = {
  "id": "",
  "timestamp": Date.now(),
  "title": "",
  "body": "",
  "author": "",
  "category": "",
  "voteScore": 0,
  "deleted": false
}

function postReducer (state = initialPostState, action) {
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

/*
function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      }
    default :
      return state
  }
}
*/

function voteReducer (state = {}, action) {
  const { voteScore } = action

  switch (action.type) {
    case DOWN_VOTE:
      return {
        ...state,
        [voteScore]: voteScore + 1
      }
    case UP_VOTE:
      return {
        ...state,
        [voteScore]: voteScore - 1
      }
    default:
    return state
  }
}

export default combineReducers({
  commentReducer,
  postReducer,
  voteReducer
})
