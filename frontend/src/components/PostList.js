import React from 'react'

export default function PostList ({ category, posts }) {
  if (!posts){return <p>No Posts Yet</p>} else {
    // console.log(category,posts);
    posts = posts.filter(function (post){
      // console.log('filterCheck --------------- ',post.category === category)
      return post.category===category
    })
    //console.log('filtered posts: ',fPosts.map((fpost)=>fpost.body));
  }
  return (
    <div>
      <h3>{category}</h3>
      {posts && posts.map((post)=>(
        <div>
          <p>{post.title}</p><p>{post.id}</p>
          <p>{post.title} by {post.author} on {post.timestamp}</p>
        </div>
      ))}
    </div>
  )
}
