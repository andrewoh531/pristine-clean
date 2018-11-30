const HOUSE_TYPE_PARAM = 'houseType';
const HOUSE_TYPE_APARTMENT = 'Apartment';

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

export {
    prices as default,
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
}
