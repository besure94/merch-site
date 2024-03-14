import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      {props.itemList.map((item, index) =>
        <Item name={item.name}
          description={item.description}
          color={item.color}
          size={item.size}
          quantity={item.quantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
}

export default ItemList;