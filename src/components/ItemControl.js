import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }

}

export default ItemControl;