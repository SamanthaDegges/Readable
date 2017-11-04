import React from 'react'
import { convertTime } from '../utils/helpers'

export default function PostChunk ({post, onClickUp, onClickDown}) {


return (
  <div key={post.id} id="postChunk">
    <h4 className="postTitle">{post.title}</h4>
    <div className="voteChunk">
      <i className="fi-like large" onClick = {() => onClickUp(post)}>UP</i>
      <p className="postVoteScore">{post.voteScore}</p>
      <i className="fi-dislike large" onClick = {() => onClickDown(post)} ></i>
    </div>
    <div className="postContent">
      <h6 className="postAuthor">{post.author} on {convertTime(post.timestamp)}</h6>
      <p className="postBody">{post.body}</p>
    </div>
  </div>
)}
