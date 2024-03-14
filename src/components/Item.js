import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h4>Name: {props.name}</h4>
      <h4>Description: {props.description}</h4>
      <h4>Color: {props.color}</h4>
      <h4>Size: {props.size}</h4>
      <h4>Quantity: {props.quantity}</h4>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Item;