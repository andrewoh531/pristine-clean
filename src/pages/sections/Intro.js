import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid'
import { tablet, desktop } from '../media';

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10%;
  font-family: 'Raleway', sans-serif;
`

const Title = styled(Box)`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media ${tablet} {
    font-size: 6rem;
  }

  @media ${desktop} {
    font-size: 8rem;
  }
`

const Tagline = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: 400;


  @media ${tablet} {
    font-size: 2.5rem;
  }
`

class Intro extends Component {
  render() {
    return (
      <Container className="intro-background">
        <Title>Pristine Clean</Title>
        <Tagline>Relax</Tagline>
        <Tagline>Leave the cleaning to us</Tagline>
      </Container>
    );
  }
}

export default Intro;
