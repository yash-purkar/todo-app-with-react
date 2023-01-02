import React from 'react'

const Todo = () => {
  return (
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <img src="" alt="" />
          <figcaption>Add Your List Here✍</figcaption>
        </figure>

        <div className="inputDiv">
          <input type="text" />
          <button>+</button>
        </div>

        <div className="showList">
          <div className="item">
            <h3>Apple</h3>
            <div className="two-buttons">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        </div>
        <div className="clear-btn">
          <button>Clear All</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;