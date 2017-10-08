import React from 'react'

export default function Sections ({ categories }) {
  if (!categories){return <div><h2>No Categories</h2></div>} else {    //returning soemthing triggers re render? And if state changes, rerender.
    return (
      <div className=''>
        <h3 className=''>
          What Everyone Is Talking About
        </h3>
        <ul>
        {console.log(categories)}
          {categories.map((each) => (
            <a href={`http://localhost:3001/:${each.path}/posts`}><li key={each}>
              {each.name}
            </li></a>
          ))}
        </ul>
      </div>
    )
  }
  }
//onClick=hideSections component, show posts component.
/*
showSections
hideSections
showPosts
hidePosts
expandComments
collapseComments


where actions that change the store(shared state amongst components) would include:
addPost
removePost
addComment
RemoveComment
addSection
removeSection
*/
