import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';


const SelectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 40rem;
  margin: 0 auto;

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;

    @media (min-width: 600px) {
      flex-basis: 33%;
    }
  }

  /* Center align text */
  /* & div > div > div { 
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  & span {
    background-color: white;
  }
`

const HOUSE_TYPE_PARAM = 'houseType';
const HOUSE_TYPE_APARTMENT = 'Apartment';
// const HOUSE_TYPE_HOUSE = 'House';
// const HOUSE_TYPE_LIST = [HOUSE_TYPE_APARTMENT, HOUSE_TYPE_HOUSE];

const BEDROOMS_TYPE_PARAM = 'bedrooms';
const STUDIO = { value: 'Studio', label: 'Studio' };
const BEDROOMS_1 = { value: '1 Bedroom', label: '1 Bedroom' };
const BEDROOMS_2 = { value: '2 Bedrooms', label: '2 Bedrooms' };
const BEDROOMS_3 = { value: '3 Bedrooms', label: '3 Bedrooms' };
const BEDROOMS_4 = { value: '4 Bedrooms', label: '4 Bedrooms' };
const BEDROOM_TYPES_OPTIONS = [STUDIO, BEDROOMS_1, BEDROOMS_2, BEDROOMS_3, BEDROOMS_4];

const BATHROOMS_TYPE_PARAM = 'bathrooms';
const BATHROOMS_1 = { value: '1 Bathroom', label: '1 Bathroom' };
const BATHROOMS_2 = { value: '2 Bathrooms', label: '2 Bathrooms' };
const BATHROOMS_3 = { value: '3 Bathrooms', label: '3 Bathrooms' };
const BATHROOMS_4 = { value: '4 Bathrooms', label: '4 Bathrooms' };
const BATHROOMS_5 = { value: '5 Bathrooms', label: '5 Bathrooms' };
const BATHROOMS_TYPE_OPTIONS = [ BATHROOMS_1, BATHROOMS_2, BATHROOMS_3, BATHROOMS_4, BATHROOMS_5 ];


const CLEANING_TYPE_PARAM = 'cleaningType';
const REGULAR_CLEANING = { value: 'Regular', label: 'Regular' };
const DEEP_CLEANING = { value: 'Deep clean', label: 'Deep clean' };
const MOVING_CLEANING = { value: 'Moving in/out', label: 'Moving in/out' };
const CLEANING_TYPE_OPTIONS = [ REGULAR_CLEANING, DEEP_CLEANING, MOVING_CLEANING ];


class QuoteIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      [HOUSE_TYPE_PARAM]: HOUSE_TYPE_APARTMENT,
      [BEDROOMS_TYPE_PARAM]: BEDROOMS_2,
      [BATHROOMS_TYPE_PARAM]: BATHROOMS_2,
      [CLEANING_TYPE_PARAM]: REGULAR_CLEANING,
      indicativePrice: this.getIndicativePrice(
        {
          [BEDROOMS_TYPE_PARAM]: BEDROOMS_2,
          [BATHROOMS_TYPE_PARAM]: BATHROOMS_2,
          [CLEANING_TYPE_PARAM]: REGULAR_CLEANING
        })
    }
  }

  housePropertyChangeHandler = (propertyName) => {
    return (selectedOption) => {
      this.setState({[propertyName]: selectedOption});
      this.setState({indicativePrice: this.getIndicativePrice(Object.assign({}, this.state, {[propertyName]: selectedOption}))});
      // ga('send', 'event', propertyName, value)
    };
  };

  bookButtonClickHandler = () => {
    // ga('send', 'event', 'book-now-button', 'click');
  };

  getIndicativePrice = ({bedrooms, bathrooms, cleaningType}) => {
    const prices = {
      [STUDIO.value]: {
        [BATHROOMS_1.value]: {
          [REGULAR_CLEANING.value]: 55,
          [DEEP_CLEANING.value]: 100,
          [MOVING_CLEANING.value]: 300
        },
        [BATHROOMS_2.value]: {
          [REGULAR_CLEANING.value]: 65,
          [DEEP_CLEANING.value]: 120,
          [MOVING_CLEANING.value]: 350
        },
        [BATHROOMS_3.value]: {
          [REGULAR_CLEANING.value]: 75,
          [DEEP_CLEANING.value]: 140,
          [MOVING_CLEANING.value]: 400
        },
        [BATHROOMS_4.value]: {
          [REGULAR_CLEANING.value]: 85,
          [DEEP_CLEANING.value]: 150,
          [MOVING_CLEANING.value]: 450
        },
        [BATHROOMS_5.value]: {
          [REGULAR_CLEANING.value]: 95,
          [DEEP_CLEANING.value]: 160,
          [MOVING_CLEANING.value]: 500
        }
      },
      [BEDROOMS_1.value]: {
        [BATHROOMS_1.value]: {
          [REGULAR_CLEANING.value]: 60,
          [DEEP_CLEANING.value]: 120,
          [MOVING_CLEANING.value]: 400
        },
        [BATHROOMS_2.value]: {
          [REGULAR_CLEANING.value]: 70,
          [DEEP_CLEANING.value]: 140,
          [MOVING_CLEANING.value]: 450
        },
        [BATHROOMS_3.value]: {
          [REGULAR_CLEANING.value]: 80,
          [DEEP_CLEANING.value]: 160,
          [MOVING_CLEANING.value]: 500
        },
        [BATHROOMS_4.value]: {
          [REGULAR_CLEANING.value]: 90,
          [DEEP_CLEANING.value]: 180,
          [MOVING_CLEANING.value]: 550
        },
        [BATHROOMS_5.value]: {
          [REGULAR_CLEANING.value]: 100,
          [DEEP_CLEANING.value]: 200,
          [MOVING_CLEANING.value]: 600
        }
      },
      [BEDROOMS_2.value]: {
        [BATHROOMS_1.value]: {
          [REGULAR_CLEANING.value]: 70,
          [DEEP_CLEANING.value]: 150,
          [MOVING_CLEANING.value]: 450
        },
        [BATHROOMS_2.value]: {
          [REGULAR_CLEANING.value]: 85,
          [DEEP_CLEANING.value]: 180,
          [MOVING_CLEANING.value]: 500
        },
        [BATHROOMS_3.value]: {
          [REGULAR_CLEANING.value]: 100,
          [DEEP_CLEANING.value]: 210,
          [MOVING_CLEANING.value]: 550
        },
        [BATHROOMS_4.value]: {
          [REGULAR_CLEANING.value]: 115,
          [DEEP_CLEANING.value]: 240,
          [MOVING_CLEANING.value]: 600
        },
        [BATHROOMS_5.value]: {
          [REGULAR_CLEANING.value]: 130,
          [DEEP_CLEANING.value]: 270,
          [MOVING_CLEANING.value]: 650
        }
      },
      [BEDROOMS_3.value]: {
        [BATHROOMS_1.value]: {
          [REGULAR_CLEANING.value]: 70,
          [DEEP_CLEANING.value]: 160,
          [MOVING_CLEANING.value]: 500
        },
        [BATHROOMS_2.value]: {
          [REGULAR_CLEANING.value]: 90,
          [DEEP_CLEANING.value]: 190,
          [MOVING_CLEANING.value]: 550
        },
        [BATHROOMS_3.value]: {
          [REGULAR_CLEANING.value]: 110,
          [DEEP_CLEANING.value]: 220,
          [MOVING_CLEANING.value]: 600
        },
        [BATHROOMS_4.value]: {
          [REGULAR_CLEANING.value]: 130,
          [DEEP_CLEANING.value]: 250,
          [MOVING_CLEANING.value]: 650
        },
        [BATHROOMS_5.value]: {
          [REGULAR_CLEANING.value]: 150,
          [DEEP_CLEANING.value]: 280,
          [MOVING_CLEANING.value]: 700
        }
      },
      [BEDROOMS_4.value]: {
        [BATHROOMS_1.value]: {
          [REGULAR_CLEANING.value]: 95,
          [DEEP_CLEANING.value]: 190,
          [MOVING_CLEANING.value]: 550
        },
        [BATHROOMS_2.value]: {
          [REGULAR_CLEANING.value]: 110,
          [DEEP_CLEANING.value]: 220,
          [MOVING_CLEANING.value]: 600
        },
        [BATHROOMS_3.value]: {
          [REGULAR_CLEANING.value]: 130,
          [DEEP_CLEANING.value]: 250,
          [MOVING_CLEANING.value]: 650
        },
        [BATHROOMS_4.value]: {
          [REGULAR_CLEANING.value]: 150,
          [DEEP_CLEANING.value]: 280,
          [MOVING_CLEANING.value]: 700
        },
        [BATHROOMS_5.value]: {
          [REGULAR_CLEANING.value]: 170,
          [DEEP_CLEANING.value]: 310,
          [MOVING_CLEANING.value]: 750
        }
      },
    };

    return prices[bedrooms.value][bathrooms.value][cleaningType.value];
  };

  render() {
    const { bedrooms, bathrooms, cleaningType, indicativePrice } = this.state;

    return (
      <>
        <SelectionWrapper>
          <Select
            value={bedrooms}
            onChange={this.housePropertyChangeHandler(BEDROOMS_TYPE_PARAM)}
            options={BEDROOM_TYPES_OPTIONS}
          />
          <Select
            value={bathrooms}
            onChange={this.housePropertyChangeHandler(BATHROOMS_TYPE_PARAM)}
            options={BATHROOMS_TYPE_OPTIONS}
          />
          <Select
            value={cleaningType}
            onChange={this.housePropertyChangeHandler(CLEANING_TYPE_PARAM)}
            options={CLEANING_TYPE_OPTIONS}
          />
        </SelectionWrapper>


        <div className="row justify-content-center mt-2">
          <a href="#contact-us" className="btn btn-primary price-button col-xs-12 col-sm-9" onClick={this.bookButtonClickHandler}>Book from ${indicativePrice}</a>
        </div>
      </>
    );
  }
}

export default QuoteIndicator;
