import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Add a new item</h3>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Item name"/>
        <br/>
        <input
          type="text"
          name="description"
          placeholder="Description"/>
        <br/>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          min="0"/>
        <br/>
        <button type="submit">Add Item</button>
      </form>
      <br/>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;