import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmitCapture={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"/>
        <br/>
        <input
          type="text"
          name="description"
          placeholder="Description"/>
        <br/>
        <input
          type="text"
          name="color"
          placeholder="Color"/>
        <br/>
        <input
          type="text"
          name="size"
          placeholder="Size"/>
        <br/>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"/>
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
      <hr/>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;