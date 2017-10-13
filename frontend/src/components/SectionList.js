import React from 'react'

export default function SectionList ({ categories }) {
  if (!categories){return <div><h2>No Categories</h2></div>} else {    //returning soemthing triggers re render? And if state changes, rerender.
    return (
      <div className=''>
        <h3 className=''>
          What Everyone Is Talking About
        </h3>
        <ul>
        {console.log(categories)}
          {categories.map((each) => ( //onclick, each category can then call a function to populate posts(of that cateogry and then display them)
            <li key={each.id}> {/*onClick={filterPostsByCat(each.name)} */}
              {each.name}
            </li>
          ))}
        </ul>
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
