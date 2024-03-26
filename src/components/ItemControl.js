import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleBuyClick = (itemToBuy) => {
    const boughtItem = {...itemToBuy, quantity: itemToBuy.quantity -= 1};
    const editedMainItemList = this.state.mainItemList
    .filter(item => item.id !== this.state.selectedItem.id)
    .concat(boughtItem);
    this.setState({
      mainItemList: editedMainItemList
    });
  }

  handleRestockClick = (itemToRestock) => {
    const restockedItem = {...itemToRestock, quantity: itemToRestock.quantity += 25};
    const editedMainItemList = this.state.mainItemList
    .filter(item => item.id !== this.state.selectedItem.id)
    .concat(restockedItem);
    this.setState({
      mainItemList: editedMainItemList
    });
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { id, name, description, color, size, quantity } = newItem;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      color: color,
      size: size,
      quantity
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.mainItemList[id];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedItem: null
    });
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, color, size, quantity } = itemToEdit;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      color: color,
      size: size,
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item = { this.state.selectedItem}
      onEditItem = {this.handleEditingItemInList}/>
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail
      item = {this.state.selectedItem}
      onClickingDelete = {this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick}
      onClickingBuy = {this.handleBuyClick}
      onClickingRestock = {this.handleRestockClick}/>
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.props.mainItemList} onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

ItemControl.propTypes = {
  mainItemList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainItemList: state
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;