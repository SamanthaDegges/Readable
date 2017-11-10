import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { convertTime, getTimeStamp } from '../utils/helpers'
import Comments from './Comments'
import PostList from './PostList'

export default function MainView ({filter, onSort, posts, comments, categories, onClickUp, onClickDown, byDate, byCategory, onClickEditP, onClickDeleteP }) {
  if (!posts){return <p>No Posts Yet</p>}

console.log('------ posts passed into APP are: ', posts, byDate, byCategory, comments)
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 offset-lg-9 col-md-5 offset-md-7 selector">View posts by:
          <select className="filter" value={filter ? filter : "popular"} onChange={(event)=>onSort(posts, event.target.value)}>
            <option value="recent">most recent</option>
            <option value="popular">most popular</option>
            <option value="category">topic</option>
          </select>
        </div>
      </div>
      <div>
        {byCategory && categories.map((c) => (
          <div>
            <div className="row">
              <h5 key={c.name} className="subSection">{c.name}</h5>
            </div>
              <div id="postChunk">
              {posts.filter((p)=> p.category === c.name).map((post)=> (
                <div key={post.id} id="postChunk">
                  <PostList
                    post = {post}
                    onClickUp = {onClickUp}
                    onClickDown = {onClickDown}
                    onClickEditP = {onClickEditP}
                    onClickDeleteP = {onClickDeleteP}
                    comments = {comments}
                  />
                </div>
                ))}
              </div>
          </div>
        ))}
        {!byCategory && (
          <div>
              <div id="postChunk">
              {posts.map((post)=> (
                <PostList
                  post = {post}
                  onClickUp = {onClickUp}
                  onClickDown = {onClickDown}
                  onClickEditP = {onClickEditP}
                  onClickDeleteP = {onClickDeleteP}
                  comments = {comments}
                />
                ))}
              </div>
          </div>
        )}
      </div>
    </div>
  )
}
