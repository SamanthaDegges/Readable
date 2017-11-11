import React from 'react'
import { convertTime } from '../utils/helpers'

export default function Post ({ post, onClickEditP, onClickUp, onClickDown, onClickDeleteP }) {

  return (
    <div className="post">
      <div className="title">
        <div className="postTitle">{post.title}</div>
        <div className="voteChunk">
          <i className="fi-like large" onClick = {() => onClickUp(post)}></i>
          <p className="postVoteScore">{post.voteScore}</p>
          <i className="fi-dislike large" onClick = {() => onClickDown(post)} ></i>
        </div>
      </div>
      <div className="subTitle">
        <span>{post.author}</span> on {convertTime(post.timestamp)} posted:
      </div>
      <div className="postContent">
        <p>{post.body}</p>
        <div className="controls">
        <i className="fi-pencil icon" onClick = {() => onClickEditP()}> edit post</i>
        <i className="fi-x icon" onClick = {() => onClickDeleteP(post)}> delete post</i>
        </div>
      </div>
    </div>
  )
}
