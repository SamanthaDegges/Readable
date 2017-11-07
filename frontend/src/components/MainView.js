import React from 'react'
import { convertTime, getTimeStamp } from '../utils/helpers'
import Comments from './Comments'

export default function MainView ({filter, onSort, posts, comments, categories, onClickUp, onClickDown, byDate, byCategory, onClickEditP, onClickDeleteP }) {
  if (!posts){return <p>No Posts Yet</p>}

console.log('------ posts passed into APP are: ', posts, byDate, byCategory, comments)
  return (
    <div className="posts">
      <div className = "selector">
        View posts by: <select className="filter" value={filter ? filter : "popular"} onChange={(event)=>onSort(posts, event.target.value)}>
          <option value="recent">most recent</option>
          <option value="popular">most popular</option>
          <option value="category">topic</option>
        </select>
    </div>
    <div id='test'>
      {byCategory && categories.map((c) => (
        <div>
          <h5 key={c.name} className="subSection">{c.name}</h5>
            <div id="postChunk">
            {posts.filter((p)=> p.category === c.name).map((post)=> (
              <div key={post.id} id="postChunk">
                <h4 className="postTitle">{post.title}</h4>
                <div className="voteChunk">
                  <i className="fi-like large" onClick = {() => onClickUp(post)}></i>
                  <p className="postVoteScore">{post.voteScore}</p>
                  <i className="fi-dislike large" onClick = {() => onClickDown(post)} ></i>
                </div>
                <div className="postContent">
                  <h6 className="postAuthor">{post.author} on {convertTime(post.timestamp)}</h6>
                  <p className="postBody">
                  <i className="fi-pencil"></i><i className="fi-x"></i>
                  {post.body}
                  </p>
                </div>
                <div>
                  <p>Edit | Delete </p>
                </div>
              </div>
              ))}
            </div>
        </div>
      ))}
      {!byCategory && (
        <div>

            <div id="postChunk">
            {posts.map((post)=> (
              <div key={post.id} id="postChunk">
                <h4 className="postTitle">{post.title}</h4>
                <div className="voteChunk">
                  <i className="fi-like large" onClick = {() => onClickUp(post)}></i>
                  <p className="postVoteScore">{post.voteScore}</p>
                  <i className="fi-dislike large" onClick = {() => onClickDown(post)} ></i>
                </div>
                <div className="postContent">
                  <h6 className="postAuthor">{post.author} on {convertTime(post.timestamp)}</h6>
                  <i className="fi-pencil" onClick = {() => onClickEditP({id: "8xf0y6ziyjabvozdd253nd", title: "testing Title", body: "test body.", category:"react"})}></i> //post will be post with the post with edits, sent as an object from form
                  <i className="fi-x" onClick = {() => onClickDeleteP(post)}></i>
                  <p className="postBody">
                    {post.body}
                  </p>
                    <div>

                      <p> <i className="fi-comment"></i> {comments && comments.filter((c)=> c.parentId === post.id).length}</p>
                    </div>
                </div>

                <div>
                  <p>Edit | Delete </p>
                </div>
              </div>
              ))}
            </div>
        </div>
      )}
    </div>
  </div>
)}
