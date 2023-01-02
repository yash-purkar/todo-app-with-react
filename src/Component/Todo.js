import React, { useState } from 'react'


const Todo = () => {
  const [inputItem, setInputItem] = useState("");
  const [allItems, setAllItems] = useState([]);

  function addItemInTheList() {
    if (inputItem) {
      const newInputItem = {
        id: new Date().getTime().toString(),
        name: inputItem
      }
      setAllItems([...allItems, newInputItem]);
      setInputItem("")
    }
    else {
      alert("Fill the data first.")
    }
  }

  function deleteItem(removeThisId) {
    // console.log(removeThisId)
    const updatedItems = allItems.filter((currElem) => {
      return removeThisId !== currElem.id;
    })
    setAllItems(updatedItems)
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
          {
            allItems.map((currElem) => {
              return (
                <div className="item" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="two-buttons">
                    <button>edit</button>
                    <button onClick={() => deleteItem(currElem.id)}>delete</button>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className="clear-btn">
          <button>Clear All</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;