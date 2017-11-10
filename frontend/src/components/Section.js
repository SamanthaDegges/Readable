import React from 'react'

export default function Section ({ category, posts, comments, }) {
  // console.log('posts is ',posts, comments)
  let cPosts = posts && posts.filter((p)=>p.category===category)
  console.log(cPosts)
  // comments.filter((c)=> c.parentId === post.id)

  return (
    <div>
      <div>
        <h6>{category} Posts</h6>
          {cPosts && cPosts.map((p)=> (
            <p>TITLE is {p.title}
            <h2 key={p.id}>{p.title}</h2>
            </p>
          ))}
      </div>
    </div>
 )
}


// Category View
// identical to the default view, but filtered to only include posts with the selected category
