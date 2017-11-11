import React from 'react'
import Post from './Post'
import Comments from './Comments'

export default function Section ({ category, comments, posts, onClickUp, onClickDown, onClickDeleteP, onClickEditP }) {

  let cPosts = posts && posts.filter((p)=>p.category===category)
  // let cComments = comments && comments.filter((c)=> c.parentId === post.id && deleted === false)
  //console.log('cComments is: ', cComments)
  !comments ? console.log('NO COMMENTS') : console.log('comments are: ', comments)
  /*
  body
  :
  "Comments. Are. Cool.Comments. Are. Cool.Comments. Are. Cool.Comments. Are. Cool."
  deleted
  :
  false
  id
  :
  "9tu4bsun805n8un48zx12"
  parentDeleted
  :
  false
  parentId
  :
  "1ze2u4ziyjabvozdd253nd"
  timestamp
  :
  1469479767190
  voteScore
  :
  0
  */

  return (
    <div>
      <div>
        <h6>{category} Posts</h6>
        <div id="postChunk">
          {cPosts && cPosts.map((post)=> (
            <div className="sectionPost">
              <Post
                post = {post}
                onClickUp = {onClickUp}
                onClickDown = {onClickDown}
                onClickEditP = {onClickEditP}
                onClickDeleteP = {onClickDeleteP}
                comments = {comments}
              />
              <div className="postComments">
                {console.log(comments, "new comments component will be here.")}
                <Comments
                  post = {post}
                  comments = {comments}
                />
              </div>
            </div>
            ))}
        </div>

      </div>
    </div>
 )
}


// Category View
// identical to the default view, but filtered to only include posts with the selected category
