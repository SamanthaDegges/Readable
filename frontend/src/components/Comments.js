import React from 'react'
import Modal from 'react-modal'

// componentWillMount(){
//   console.log('CommentWillMOUNT.');
//   this.props.posts && this.props.posts.map((p) => {
//     console.log('comments from componentDidMount FIRED');
//     this.props.onGetComments(p.id)
//   })
// }
//
// isOpen={foodModalOpen}
// onRequestClose={this.closeFoodModal}

export default function Comments ({ comments }) {
  if (!comments){return null}

  return (
    <div>
    {comments.map((c)=> (
      <div>{c.author} says:
        <p>{c.body}</p>
      </div>
    ))}


      <Modal
        className='modal'
        overlayClassName='overlay'

        contentLabel='Modal'
      />


    </div>
  )
}
