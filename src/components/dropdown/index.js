import React, { Component } from 'react';
import './dropdown.css';

class DropDown extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    let isFirst = true;

    return (
        <div className="dropdown col-xs-12 col-sm-3">
          <button className="btn btn-light dropdown-toggle dropdown-button" type="button" id={this.props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.value}
          </button>
          <div className="dropdown-menu" aria-labelledby={this.props.id}>

            {
              this.props.options.map(option =>
                <div key={option}>
                  { isFirst ? (isFirst = false) : <div className="dropdown-divider"></div> }
                  <button className="dropdown-item" onClick={() => this.props.onClickHandler(option)}>{option}</button>
                </div>
              )
            }

          </div>
        </div>
    );
  }
}

DropDown.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  onClickHandler: React.PropTypes.func.isRequired
};

export default DropDown;
