import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, description: event.target.description.value,
    color: event.target.color.value,
    size: event.target.size.value,
    quantity: parseInt(event.target.quantity.value),
    id: item.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Edit Item"/>
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;