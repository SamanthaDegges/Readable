import React from 'react'
import Modal from 'react-modal'
import { convertTime } from '../utils/helpers'

/*
<Modal
className='modal'
overlayClassName='overlay'

contentLabel='Modal'
/>
*/
export default function Comments ({ post, comments }) {
  if (!comments||!post) { return null }
  let allComments = comments.filter((c)=> c.parentId === post.id && c.deleted === false)

  return (
    <div className="comments">
    {allComments.map((comment)=>
      <div className="postComment">
          <div className="voteChunk">
            <i className="fi-like"></i>
            <div className="voteNumber">{comment.voteScore}</div>
            <i className="fi-dislike"></i>
            <div className="subTitle"><span>{comment.author}</span> commented: </div>
            <div className="date">{convertTime(comment.timestamp)}</div>
          </div>
          <div className="commentBody">
            <div className="indent">
            <p>{comment.body}</p>
          </div>
          </div>
      </div>
    )}
    </div>
  )
}
