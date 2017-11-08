import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionList ({ categories }) {
  function willDoOnClick() {
    return null
  }

  if (!categories){return <div><h2>No Categories</h2></div>} else {    //returning soemthing triggers re render? And if state changes, rerender.
    return (
      <div>
        <h5 className=''>
        What Everyone Is Talking About
        </h5>
        <div className="list-group">
          {categories.map((each) => ( //onclick, each category can then call a function to populate posts(of that cateogry and then display them)

            <Link
            className = "list-group-item"
            key={each.name}
            to="/react"
            >{each.name}</Link>
              // <a key={each.name} className = "list-group-item"> {/*onClick={show listed posts for that categry)} */}
              // {each.name}
              // </a>
            ))}
        </div>
      </div>

    )
  }
  }
//onClick=hideSectionList component, show posts component.
/*
showSectionList
hideSectionList
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

Reducers will take the action and return the new state to the store.
The functions within components or app props will update state of each component.
*/
