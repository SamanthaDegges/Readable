import React from 'react'
import Post from './Post'
import CommentCount from './CommentCount'

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
              <div className="postChunk">
              {posts.filter((p)=> p.category === c.name).map((post)=> (
                <div key={post.id}>
                  <Post
                    post = {post}
                    onClickUp = {onClickUp}
                    onClickDown = {onClickDown}
                    onClickEditP = {onClickEditP}
                    onClickDeleteP = {onClickDeleteP}
                    comments = {comments}
                  />
                  <CommentCount
                    post = {post}
                    comments ={comments}
                  />
                </div>
                ))}
              </div>
          </div>
        ))}
        {!byCategory && (
          <div>
              <div className="postChunk">
              {posts.map((post)=> (
                <div key={post.id}>
                  <Post
                    post = {post}
                    onClickUp = {onClickUp}
                    onClickDown = {onClickDown}
                    onClickEditP = {onClickEditP}
                    onClickDeleteP = {onClickDeleteP}
                  />
                  <CommentCount
                    comments = {comments}
                    post = {post}
                  />
                </div>
                ))}
              </div>
          </div>
        )}
      </div>
    </div>
  )
}
