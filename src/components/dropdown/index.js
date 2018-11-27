import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class DropDown extends Component {

  render() {

    let isFirst = true;
    return (
        <div className="dropdown dropdown-padding col-xs-12 col-sm-3">
          <div className="row">
            <button className="btn btn-light dropdown-toggle dropdown-button col" type="button" id={this.props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.props.value}
            </button>
            <div className="dropdown-menu col" aria-labelledby={this.props.id}>

              {
                this.props.options.map(option =>
                  <div key={option}>
                    { isFirst ? (isFirst = false) : <div className="dropdown-divider"></div> }
                    <button className="dropdown-item text-center" onClick={() => this.props.onClickHandler(option)}>{option}</button>
                  </div>
                )
              }

            </div>
          </div>
        </div>
    );
  }
}

DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default DropDown;
