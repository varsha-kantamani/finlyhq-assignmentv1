import React from "react";
import './App.css';

function App() {
  const [comment, setComment] = React.useState();
  const [comments, setComments] = React.useState([]);

  const onLikeClick = (index) => {
    let userComments = [...comments];
    userComments[index].like = userComments[index].like + 1;

    setComments(userComments);
  }

  const onDeleteClick = (index) => {
    let userComments = [...comments];
    if (index > -1) {
      userComments.splice(index, 1);
    }

    setComments(userComments);
  }

  return (
    <div className="App">
      <input type="text" value={comment} placeholder="Enter comment" onChange={e => setComment(e.target.value)} onKeyDown={e=>{
        if (e.key === 'Enter') {
          setComments([...comments,{
            content: comment,
            like: 0,
            children: []
          }]);

          setComment("");
        }
      }} />
      {
        comments.map((commentItem, index) => {
          return (
            <div className="comment-box">
              <div className="content">
                {commentItem.content}
              </div>
              <div className="action-block">
                <div className="like" onClick={()=>onLikeClick(index)}>
                  {commentItem.like > 0 && commentItem.like} Like
                </div>
                <div className="delete" onClick={()=>onDeleteClick(index)}>
                  Delete
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
