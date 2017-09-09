import React, { Component } from 'react';
import Dropdown from '../dropdown';
import './price-indicator.css';


const HOUSE_TYPE_PARAM = 'houseType';
const HOUSE_TYPE_APARTMENT = 'Apartment';
const HOUSE_TYPE_HOUSE = 'House';
const HOUSE_TYPE_LIST = [HOUSE_TYPE_APARTMENT, HOUSE_TYPE_HOUSE];

const BEDROOMS_TYPE_PARAM = 'bedrooms';
const STUDIO = 'Studio';
const BEDROOMS_1 = '1 Bedroom';
const BEDROOMS_2 = '2 Bedrooms';
const BEDROOMS_3 = '3 Bedrooms';
const BEDROOMS_4 = '4 Bedrooms';
const BEDROOM_TYPES_LIST = [STUDIO, BEDROOMS_1, BEDROOMS_2, BEDROOMS_3, BEDROOMS_4];

const BATHROOMS_TYPE_PARAM = 'bathrooms';
const BATHROOMS_1 = '1 Bathroom';
const BATHROOMS_2 = '2 Bathrooms';
const BATHROOMS_3 = '3 Bathrooms';
const BATHROOMS_4 = '4 Bathrooms';
const BATHROOMS_5 = '5 Bathrooms';
const BATHROOMS_TYPE_LIST = [BATHROOMS_1, BATHROOMS_2, BATHROOMS_3, BATHROOMS_4, BATHROOMS_5];

const CLEANING_TYPE_PARAM = 'cleaningType';
const REGULAR_CLEANING = 'Regular';
const DEEP_CLEANING = 'Deep clean';
const MOVING_CLEANING = 'Moving in/out';
const CLEANING_TYPE_LIST = [REGULAR_CLEANING, DEEP_CLEANING, MOVING_CLEANING];


class QuoteIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      [HOUSE_TYPE_PARAM]: HOUSE_TYPE_APARTMENT,
      [BEDROOMS_TYPE_PARAM]: BEDROOMS_2,
      [BATHROOMS_TYPE_PARAM]: BATHROOMS_2,
      [CLEANING_TYPE_PARAM]: REGULAR_CLEANING,
      indicativePrice: 85
    }
  }

  housePropertyChangeHandler = (propertyName) => {
    return (value) => {
      this.setState({[propertyName]: value});
      this.setState({indicativePrice: this.getIndicativePrice(Object.assign({}, this.state, {[propertyName]: value}))});
    };
  };

  getIndicativePrice = ({bedrooms, bathrooms, cleaningType}) => {
    const prices = {
      [STUDIO]: {
        [BATHROOMS_1]: {
          [REGULAR_CLEANING]: 55,
          [DEEP_CLEANING]: 100,
          [MOVING_CLEANING]: 200
        },
        [BATHROOMS_2]: {
          [REGULAR_CLEANING]: 65,
          [DEEP_CLEANING]: 120,
          [MOVING_CLEANING]: 220
        },
        [BATHROOMS_3]: {
          [REGULAR_CLEANING]: 75,
          [DEEP_CLEANING]: 140,
          [MOVING_CLEANING]: 240
        },
        [BATHROOMS_4]: {
          [REGULAR_CLEANING]: 85,
          [DEEP_CLEANING]: 150,
          [MOVING_CLEANING]: 260
        },
        [BATHROOMS_5]: {
          [REGULAR_CLEANING]: 95,
          [DEEP_CLEANING]: 160,
          [MOVING_CLEANING]: 280
        }
      },
      [BEDROOMS_1]: {
        [BATHROOMS_1]: {
          [REGULAR_CLEANING]: 60,
          [DEEP_CLEANING]: 120,
          [MOVING_CLEANING]: 2020
        },
        [BATHROOMS_2]: {
          [REGULAR_CLEANING]: 70,
          [DEEP_CLEANING]: 140,
          [MOVING_CLEANING]: 240
        },
        [BATHROOMS_3]: {
          [REGULAR_CLEANING]: 80,
          [DEEP_CLEANING]: 160,
          [MOVING_CLEANING]: 260
        },
        [BATHROOMS_4]: {
          [REGULAR_CLEANING]: 90,
          [DEEP_CLEANING]: 180,
          [MOVING_CLEANING]: 280
        },
        [BATHROOMS_5]: {
          [REGULAR_CLEANING]: 100,
          [DEEP_CLEANING]: 200,
          [MOVING_CLEANING]: 300
        }
      },
      [BEDROOMS_2]: {
        [BATHROOMS_1]: {
          [REGULAR_CLEANING]: 70,
          [DEEP_CLEANING]: 150,
          [MOVING_CLEANING]: 300
        },
        [BATHROOMS_2]: {
          [REGULAR_CLEANING]: 85,
          [DEEP_CLEANING]: 180,
          [MOVING_CLEANING]: 350
        },
        [BATHROOMS_3]: {
          [REGULAR_CLEANING]: 100,
          [DEEP_CLEANING]: 210,
          [MOVING_CLEANING]: 400
        },
        [BATHROOMS_4]: {
          [REGULAR_CLEANING]: 115,
          [DEEP_CLEANING]: 240,
          [MOVING_CLEANING]: 460
        },
        [BATHROOMS_5]: {
          [REGULAR_CLEANING]: 130,
          [DEEP_CLEANING]: 270,
          [MOVING_CLEANING]: 530
        }
      },
      [BEDROOMS_3]: {
        [BATHROOMS_1]: {
          [REGULAR_CLEANING]: 75,
          [DEEP_CLEANING]: 160,
          [MOVING_CLEANING]: 350
        },
        [BATHROOMS_2]: {
          [REGULAR_CLEANING]: 90,
          [DEEP_CLEANING]: 190,
          [MOVING_CLEANING]: 400
        },
        [BATHROOMS_3]: {
          [REGULAR_CLEANING]: 105,
          [DEEP_CLEANING]: 220,
          [MOVING_CLEANING]: 450
        },
        [BATHROOMS_4]: {
          [REGULAR_CLEANING]: 120,
          [DEEP_CLEANING]: 250,
          [MOVING_CLEANING]: 500
        },
        [BATHROOMS_5]: {
          [REGULAR_CLEANING]: 135,
          [DEEP_CLEANING]: 280,
          [MOVING_CLEANING]: 550
        }
      },
      [BEDROOMS_4]: {
        [BATHROOMS_1]: {
          [REGULAR_CLEANING]: 95,
          [DEEP_CLEANING]: 190,
          [MOVING_CLEANING]: 400
        },
        [BATHROOMS_2]: {
          [REGULAR_CLEANING]: 110,
          [DEEP_CLEANING]: 220,
          [MOVING_CLEANING]: 450
        },
        [BATHROOMS_3]: {
          [REGULAR_CLEANING]: 130,
          [DEEP_CLEANING]: 250,
          [MOVING_CLEANING]: 500
        },
        [BATHROOMS_4]: {
          [REGULAR_CLEANING]: 150,
          [DEEP_CLEANING]: 280,
          [MOVING_CLEANING]: 550
        },
        [BATHROOMS_5]: {
          [REGULAR_CLEANING]: 170,
          [DEEP_CLEANING]: 310,
          [MOVING_CLEANING]: 600
        }
      },
    };

    return prices[bedrooms][bathrooms][cleaningType];
  };

  render() {

    return (
      <div className="container">

        <div className="row justify-content-center">
          {/*<Dropdown id="house-type-dropdown" value={this.state.houseType} options={HOUSE_TYPE_LIST} onClickHandler={this.housePropertyChangeHandler(HOUSE_TYPE_PARAM)}/>*/}
          <Dropdown id="number-of-bedrooms-dropdown" value={this.state.bedrooms} options={BEDROOM_TYPES_LIST} onClickHandler={this.housePropertyChangeHandler(BEDROOMS_TYPE_PARAM)}/>
          <Dropdown id="number-of-bathrooms-dropdown" value={this.state.bathrooms} options={BATHROOMS_TYPE_LIST} onClickHandler={this.housePropertyChangeHandler(BATHROOMS_TYPE_PARAM)}/>
          <Dropdown id="cleaning-type-dropdown" value={this.state.cleaningType} options={CLEANING_TYPE_LIST} onClickHandler={this.housePropertyChangeHandler(CLEANING_TYPE_PARAM)}/>
        </div>

        <div className="row justify-content-center mt-2">
          <a href="#contact-us" className="btn btn-primary price-button col-xs-12 col-sm-9">Book from ${this.state.indicativePrice}</a>
        </div>
      </div>
    );
  }
}

export default QuoteIndicator;
