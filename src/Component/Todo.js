import React, { useState } from 'react';
import "./styles.css";
import logo from './img/logo.svg';
import { ToastContainer, toast, Flip, Zoom, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Todo = () => {
  const [inputItem, setInputItem] = useState("");
  const [allItems, setAllItems] = useState([]);

  const warning = (msg) => toast.warning(msg, {
    position: "top-center",
  });

  const success = (msg) => toast.success(msg, {
    position: "top-center",
  })

  function addItemInTheList() {
    if (inputItem) {
      const newInputItem = {
        id: new Date().getTime().toString(),
        name: inputItem
      }
      setAllItems([...allItems, newInputItem]);
      setInputItem("");
      success("Item Added");
    }
    else {
      warning("Fill the data first!");
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
    success("Item Deleted")

  }


  // Clear all items
  function clearAll() {
    if (allItems.length > 0) {

      setAllItems([]);
      setTimeout(() => {
        success("All Cleared!");
      }, 100);
    }

    else {
      warning("Nothing to clear")
    }
  }




  return (
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <img src={logo} alt="logo" id='logo' />
          <figcaption>Add Your List Here✍</figcaption>
        </figure>

        <div className="inputDiv">
          <input type="text" value={inputItem} onChange={(e) => setInputItem(e.target.value)} id="input" placeholder='Add Your List...' maxlength="25" />
          <button id='addBtn' onClick={addItemInTheList}>+</button>
        </div>

        <div className="showList">
          {
            allItems.map((currElem) => {
              return (
                <div className="item" key={currElem.id}>
                  <p className='data'>{currElem.name}</p>
                  <button onClick={() => deleteItem(currElem.id)} className="delete">delete</button>
                </div>
              )
            })
          }
        </div>

        <div className="clear-btn">
          <button onClick={clearAll}>Clear All</button>
        </div>

      </div>
      <ToastContainer autoClose={200} transition={Flip} />
    </div>
  )
}

export default Todo;