const token = "whatever"
const api = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Content-Type' :'application/json',
  'Authorization': token
}

export function getCategories () {
  return fetch(`${ api }/categories`, { headers })
  .then((apiResponse) => apiResponse.json())
  .then((resolved) => resolved.categories) //
}

export function getPosts () {
  return fetch(`${ api }/posts`, { headers })
  .then(function(response) {
    response = response.json()
    return response
  }).then(function(resolved) {
    return resolved
  })
}

export const createPost = (newPost) =>
  fetch(`${ api }/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ newPost })
  })
  .then(apiResponse => apiResponse.json())

export const votePost = (postId, upVote_downVote) =>
  fetch(`${ api }/posts/${ postId }`, {
    method: 'POST',
    headers,
    option: upVote_downVote
  })

  .then(function(apiResponse) {
    return apiResponse.json();
  })
  .then((resolved) => resolved)
  .catch((e) => e)

export const deletePost = (postId) =>
fetch(`${ api }/posts/${ postId }`, {
  method: 'DELETE',
  headers
})
.then(apiResponse => apiResponse.json())

export const editPost = (postId, edit) =>
fetch(`${ api }/posts/${ postId }`, {
  method: 'PUT',
  headers,
  body: JSON.stringify({ edit }) //title, body, etc
})
.then(apiResponse => apiResponse.json())

/*
COMMENTS
*/
export const voteComment = (commentId, upVote_downVote) =>
  fetch(`${ api }/comments${ commentId }`, {
    headers,
    method: 'POST',
    option: upVote_downVote
  })
  .then(apiResponse => apiResponse.json())
  .then((resolved) => resolved)

export const createComment = (newComment) =>
  fetch(`${ api }/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ newComment })
  })
  .then(apiResponse => apiResponse.json())

export const editComment = (commentId, edit) =>
  fetch(`${ api }/comments/${ commentId }`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ edit }) //title, body, etc
  })
  .then(apiResponse => apiResponse.json())

export const getComments = (postId) =>
  fetch(`${ api }/posts/${ postId }/comments`, { headers }) //get all comments for a particular post
  .then(apiResponse => apiResponse.json())

export const getComment = (commentId) =>
  fetch(`${ api }/comments/${ commentId }`, { headers }) //get details of one comment
  .then(apiResponse => apiResponse.json())

export const deleteComment = (commentId) =>
  fetch(`${ api }/comments/${ commentId }`, {
    method: 'DELETE',
    headers
  })
  .then(apiResponse => apiResponse.json())



/*

curl -X POST
-H "Content-Type: application/json"
-H "Authorization: whatever"
--data '{"option": "upVote"}'
http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd

DELETE /posts/:id
  USAGE:
    Sets the deleted flag for a post to 'true'.
    Sets the parentDeleted flag for all child comments to 'true'.

DELETE /comments/:id
  USAGE:
    Sets a comment's deleted flag to 'true'
*/
