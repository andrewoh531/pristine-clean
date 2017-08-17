import React, { Component } from 'react';
import './ContactUs.css';

class InputField extends Component {


  render() {
    const {placeholderText} = this.props;

    return (
      <div >
        <input type="text" placeholder={placeholderText}/>
      </div>
    );
  }
}

InputField.propTypes = {
  placeHolderText: React.PropTypes.string.isRequired,
  validator: React.PropTypes.func.isRequired
};

export default InputField;
