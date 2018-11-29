import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    top: 50%;
    left: 50%;
    position: fixed;
    background: red;
    display: ${ props => ( props.isVisible ? 'none' : 'block' ) };
`;

const Modal = props => {
    console.log(`isVisible = ${props.isVisible}`);
   return (
    <Container>
        Modal yo
        {props.children}
    </Container>
)};


Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired
};

export default Modal;
