export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'


export function addComment ({ title, timestamp, voteScore, body, author }) {
  return {
    type: ADD_COMMENT,
    timestamp,
    voteScore,
    body,
    author
  }
}
// EXAMPLE COMMENT
/*
id: '894tuq4ut84ut8v4t8wun89g',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: 'Hi there! I am a COMMENT.',
  author: 'thingtwo',
  voteScore: 6,
  deleted: false,
  parentDeleted: false
*/

export function removeComment ({ id, deleted }) {
  return {
    type: REMOVE_COMMENT,
    deleted: true
  }
}
/* EXAMPLE POSTS
[
    {
        "id": "8xf0y6ziyjabvozdd253nd",
        "timestamp": 1467166872634,
        "title": "Udacity is the best place to learn React",
        "body": "Everyone says so after all.",
        "author": "thingtwo",
        "category": "react",
        "voteScore": 6,
        "deleted": false
    },
    {
        "id": "6ni6ok3ym7mf1p33lnez",
        "timestamp": 1468479767190,
        "title": "Learn Redux in 10 minutes!",
        "body": "Just kidding. It takes more than 10 minutes to learn technology.",
        "author": "thingone",
        "category": "redux",
        "voteScore": -5,
        "deleted": false
    }
]
*/
export function addPost ({ post }) {
  return {
    type: ADD_POST,
    post
  }
}

export function removePost ({ post }) {
  return {
    type: REMOVE_POST,
    post
  }
}

export function upVote ({ id, voteScore }) {
  return {
    type: UP_VOTE,
    voteScore,
    id
  }
}

export function downVote ({ id, voteScore }) {
  return {
    type: DOWN_VOTE,
    voteScore,
    id
  }
}
