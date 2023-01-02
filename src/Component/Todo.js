import React, { useState } from 'react'


const Todo = () => {
  const [inputItem, setInputItem] = useState();
  const [addItem, setAddItem] = useState();

  function addItemInTheList() {
    setAddItem(inputItem);
  }

  return (
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <img src="" alt="" />
          <figcaption>Add Your List Here✍</figcaption>
        </figure>

        <div className="inputDiv">
          <input type="text" value={inputItem} onChange={(e) => setInputItem(e.target.value)} />
          <button onClick={addItemInTheList}>+</button>
        </div>

        <div className="showList">
          <div className="item">
            <h3>{addItem}</h3>
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