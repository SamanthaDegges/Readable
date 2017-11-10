import React from 'react'
import { convertTime } from '../utils/helpers'

export default function PostList ({ post, comments, onClickEditP, onClickUp, onClickDown, onClickDeleteP }) {

  return (
    <div className="post">
      <div className="title">
        <h4 className="postTitle">{post.title}</h4>
      </div>
      <div className="voteChunk">
        <i className="fi-like large" onClick = {() => onClickUp(post)}></i>
        <p className="postVoteScore">{post.voteScore}</p>
        <i className="fi-dislike large" onClick = {() => onClickDown(post)} ></i>
      </div>
      <div className="subTitle">
        {post.author} on {convertTime(post.timestamp)}
        <i className="fi-pencil icon" onClick = {() => onClickEditP()}></i>
        <i className="fi-x icon" onClick = {() => onClickDeleteP(post)}></i>
      </div>
      <div className="postContent">
        <p>{post.body}</p>
      </div>
      <div className="commentCount">
        <i className="fi-comment"></i> {comments && comments.filter((c)=> c.parentId === post.id).length} comments
      </div>
    </div>
  )
}
