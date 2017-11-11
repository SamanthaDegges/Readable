import React from 'react'
import Modal from 'react-modal'

export default function CommentCount ({ post, comments }) {
  if (!comments || !post){return null}
  let totalC = comments && comments.filter((c)=> c.parentId === post.id).length
  let theComments = totalC === 1 ? "comment" : "comments"
  return (
    <div>
      <div className="commentCount">
        <i className="fi-comment"></i> {`${totalC} ${theComments}`}
      </div>
    </div>
  )
}
