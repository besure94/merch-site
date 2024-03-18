import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete, onClickingEdit, onClickingBuy } = props;

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h4>Name: {item.name}</h4>
      <h4>Description: {item.description}</h4>
      <h4>Color: {item.color}</h4>
      <h4>Size: {item.size}</h4>
      <h4>Quantity: {item.quantity}</h4>
      <button onClick={() => onClickingBuy(item)}>Buy</button>
      <br/>
      <button onClick={() => onClickingEdit(item.id)}>Edit Item</button>
      <br/>
      <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default ItemDetail;