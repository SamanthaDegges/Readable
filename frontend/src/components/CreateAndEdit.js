import React from 'react'

export default function CreateAndEdit ({ postOrComment, newPost }) { //i can pass in "post" or "comment"

  if (postOrComment == newPost) {
      return <form>Create a New Post</form>
      // Gather and pass along these upon saving new post: id, title, body, author, timestamp, voteScore.
  } else {
    //Gather and pass along these upon saving new comment: id, parentId, timestamp, body, author, voteScore,deleted(default false), parentDeleted(default false)
      return <form>Please Comment Below</form>
    }
/*
Create/Edit View
A form to create new post or edit existing posts
When editing, existing data should be populated in the form --so a id can be passed in. If so, then fetch that specific post or comment and display its data.
*/

}

/*
EXAMPLE COMMENT
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  }

EXAMPLE POST
  "8xf0y6ziyjabvozdd253nd": {
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Udacity is the best place to learn React',
  body: 'Everyone says so after all.',
  author: 'thingtwo',
  category: 'react',
  voteScore: 6,
  deleted: false
}
*/
