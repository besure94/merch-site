import React, { useState, useEffect } from "react";
import NewItemForm from "../form/NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import EditItemForm from "../form/EditItemForm";
import { db, auth } from '../../firebase.js';

function ItemControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainItemList, setMainItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editing, setEditing] = useState(false);
  // const [error, setError] = useState(null);

  const handleClick = () => {
    if (selectedItem != null) {
      setFormVisibleOnPage(false);
      setSelectedItem(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleBuyClick = (itemToBuy) => {
    const boughtItem = {...itemToBuy, quantity: itemToBuy.quantity -= 1};
    const editedMainItemList = mainItemList
    .filter(item => item.id !== selectedItem.id)
    .concat(boughtItem);
    setMainItemList(editedMainItemList);
  }

  const handleRestockClick = (itemToRestock) => {
    const restockedItem = {...itemToRestock, quantity: itemToRestock.quantity += 25};
    const editedMainItemList = mainItemList
    .filter(item => item.id !== selectedItem.id)
    .concat(restockedItem);
    setMainItemList(editedMainItemList);
  }

  const handleAddingNewItemToList = (newItem) => {
    const newMainItemList = mainItemList.concat(newItem);
    setMainItemList(newMainItemList);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedItem = (id) => {
    const selectedItem = mainItemList.filter(ticket => ticket.id === id)[0];
    setSelectedItem(selectedItem);
  }

  const handleDeletingTicket = (id) => {
    const newMainItemList = mainItemList.filter(item => item.id !== id);
    setMainItemList(newMainItemList);
    setSelectedItem(null);
  }

  const handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = mainItemList
    .filter(item => item.id !== selectedItem.id)
    .concat(itemToEdit);
    setMainItemList(editedMainItemList);
    setEditing(false);
    setSelectedItem(null);
  }


  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleState = <EditItemForm item = {selectedItem}
    onEditItem = {handleEditingItemInList}/>
    buttonText = "Return to Item List";
  } else if (selectedItem != null) {
    currentlyVisibleState = <ItemDetail
    item = {selectedItem}
    onClickingDelete = {handleDeletingTicket}
    onClickingEdit = {handleEditClick}
    onClickingBuy = {handleBuyClick}
    onClickingRestock = {handleRestockClick}/>
    buttonText = "Return to Item List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewItemForm onNewItemCreation={handleAddingNewItemToList}/>
    buttonText = "Return to Item List";
  } else {
    currentlyVisibleState = <ItemList itemList={mainItemList} onItemSelection={handleChangingSelectedItem}/>;
    buttonText = "Add Item";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
  }

export default ItemControl;