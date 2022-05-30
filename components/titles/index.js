import React from 'react';
import styled from 'styled-components';

const TitleComponent = styled.p`
    font: var(--title);
    color: ${(props) => props.color || '#000'};
`;

const Title = (props) => {
    return <TitleComponent {...props}>{props.children}</TitleComponent>;
};

export { Title };
