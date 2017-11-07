import React from 'react'

export default function PostDetail ({ post, comments }) {
  const { id, title, body, author, timestamp, voteScore } = post
  return (
    <div>
      <h6>POST DETAIL COMPONENT</h6>
      <Comments
        pId = {post.id}
        comments = {comments.filter((c)=> c.parentId === post.id)}
        />
    </div>
  )
  /*
Post Detail View
should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
should list all of the comments for that post, ordered by voteScore (highest first)
should have controls to edit or delete the post
should have a control to add a new comment.
implement comment form however you want (inline, modal, etc.)
comments should also have controls for editing or deleting
*/
}
