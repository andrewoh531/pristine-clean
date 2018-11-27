import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";
import prices, {
  HOUSE_TYPE_PARAM,
  BATHROOMS_TYPE_PARAM,
  BEDROOMS_TYPE_PARAM,
  CLEANING_TYPE_PARAM,
  BEDROOM_TYPES_OPTIONS,
  BATHROOMS_TYPE_OPTIONS,
  CLEANING_TYPE_OPTIONS,
  HOUSE_TYPE_APARTMENT,
  BEDROOMS_2,
  BATHROOMS_2,
  REGULAR_CLEANING
} from "./data";

const SelectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 40rem;
  margin: 0 auto;

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;

    @media (min-width: 600px) {
      flex-basis: 30%;
    }
  }
`;

const StyledAnchor = styled.a`
  background-color: #007bff;
  color: white;
  font-size: 1em;
  font-weight: 400;
  text-decoration: none;
  margin-top: 0.5rem;

  height: 44px;
  line-height: 44px;
  flex: 1 1 100%;
  text-align: center;

  border-radius: 4px;
`;

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    margin: "1.5px"
  }),
  option: (provided, state) => ({
    ...provided,
    paddingRight: "36px",
    textAlign: "center"
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    justifyContent: "center"
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: "white"
  })
};

class QuoteIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [HOUSE_TYPE_PARAM]: HOUSE_TYPE_APARTMENT,
      [BEDROOMS_TYPE_PARAM]: BEDROOMS_2,
      [BATHROOMS_TYPE_PARAM]: BATHROOMS_2,
      [CLEANING_TYPE_PARAM]: REGULAR_CLEANING,
      indicativePrice: this.getIndicativePrice({
        [BEDROOMS_TYPE_PARAM]: BEDROOMS_2,
        [BATHROOMS_TYPE_PARAM]: BATHROOMS_2,
        [CLEANING_TYPE_PARAM]: REGULAR_CLEANING
      })
    };
  }

  housePropertyChangeHandler = propertyName => {
    return selectedOption => {
      this.setState({ [propertyName]: selectedOption });
      this.setState({
        indicativePrice: this.getIndicativePrice(
          Object.assign({}, this.state, { [propertyName]: selectedOption })
        )
      });
      // ga('send', 'event', propertyName, value)
    };
  };

  bookButtonClickHandler = () => {
    // ga('send', 'event', 'book-now-button', 'click');
  };

  getIndicativePrice = ({ bedrooms, bathrooms, cleaningType }) => {
    return prices[bedrooms.value][bathrooms.value][cleaningType.value];
  };

  render() {
    const { bedrooms, bathrooms, cleaningType, indicativePrice } = this.state;

    return (
      <SelectionContainer>
        <Select
          value={bedrooms}
          onChange={this.housePropertyChangeHandler(BEDROOMS_TYPE_PARAM)}
          options={BEDROOM_TYPES_OPTIONS}
          styles={customStyles}
        />
        <Select
          value={bathrooms}
          onChange={this.housePropertyChangeHandler(BATHROOMS_TYPE_PARAM)}
          options={BATHROOMS_TYPE_OPTIONS}
          styles={customStyles}
        />
        <Select
          value={cleaningType}
          onChange={this.housePropertyChangeHandler(CLEANING_TYPE_PARAM)}
          options={CLEANING_TYPE_OPTIONS}
          styles={customStyles}
        />

        <StyledAnchor
          href="#contact-us"
          className="btn btn-primary price-button col-xs-12 col-sm-9"
          onClick={this.bookButtonClickHandler}
        >
          Book from ${indicativePrice}
        </StyledAnchor>
      </SelectionContainer>
    );
  }
}

export default QuoteIndicator;
