import React from 'react'

export default function PostDetail ({ post }) {
  const { id, title, body, author, timestamp, voteScore } = post
  return null
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
