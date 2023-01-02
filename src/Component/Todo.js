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

  // Delete
  function deleteItem(removeThisId) {
    // console.log(removeThisId)
    const updatedItems = allItems.filter((currElem) => {
      return removeThisId !== currElem.id;
    })
    setAllItems(updatedItems);
    setInputItem("");

  }


  // Clear all items
  function clearAll() {
    if (allItems.length > 0) {

      setAllItems([]);
      setTimeout(() => {
        alert("data cleared succesfully")
      }, 100);
    }

    else {
      alert("Nothing to clear")
    }
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
                    <button onClick={() => deleteItem(currElem.id)}>delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="clear-btn">
          <button onClick={clearAll}>Clear All</button>
        </div>

      </div>
    </div>
  )
}

export default Todo;