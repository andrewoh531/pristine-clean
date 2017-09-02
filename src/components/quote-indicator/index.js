import React, { Component } from 'react';
import Dropdown from '../dropdown';
import './quote-indicator.css';

class QuoteIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houseType: 'Apartment',
      bedrooms: '2 Bedrooms',
      bathrooms: '1 Bathroom',
      cleaningType: 'Regular'
    }
  }

  handleHouseTypeClick = (value) => {
    this.setState({houseType: value});
  };

  handleNumberOfBedroomsClick = (value) => {
    this.setState({bedrooms: value});
  };

  handleNumberOfBathroomsClick = (value) => {
    this.setState({bathrooms: value});
  };

  handleCleaningTypeClick = (value) => {
    this.setState({cleaningType: value});
  };

  render() {

    return (
      <div className="quote-indicator-container row center-xs">

        <div className="row center-xs dropdown-container xs-col-12">
          <Dropdown id="house-type-dropdown" value={this.state.houseType} options={['Apartment', 'House']} onClickHandler={this.handleHouseTypeClick}/>
          <Dropdown id="number-of-bedrooms-dropdown" value={this.state.bedrooms} options={['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5 Bedrooms']} onClickHandler={this.handleNumberOfBedroomsClick}/>
          <Dropdown id="number-of-bathrooms-dropdown" value={this.state.bathrooms} options={['1 Bathroom', '2 Bathrooms', '3 Bathrooms', '4 Bathrooms', '5 Bathrooms']} onClickHandler={this.handleNumberOfBathroomsClick}/>
          <Dropdown id="cleaning-type-dropdown" value={this.state.cleaningType} options={['Regular', 'Deep clean', 'Moving in/out']} onClickHandler={this.handleCleaningTypeClick}/>

          <button type="button" className="btn btn-primary price-button col-xs-12 col-sm-2">Starting from $50</button>
        </div>
      </div>
    );
  }
}

export default QuoteIndicator;
