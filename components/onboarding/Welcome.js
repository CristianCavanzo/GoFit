import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
    height: 100vh;
    width: 100vw;
    background: url(${(props) => props.imgUrl});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px 32px;
    box-shadow: 0px -290px 7px 0px #0000003d inset;
`;

const Welcome = ({ children, imgUrl }) => {
    return <WelcomeContainer imgUrl={imgUrl}>{children}</WelcomeContainer>;
};

export { Welcome };
