import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h4>Name: {item.name}</h4>
      <h4>Description: {item.description}</h4>
      <h4>Color: {item.color}</h4>
      <h4>Size: {item.size}</h4>
      <h4>Quantity: {item.quantity}</h4>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;