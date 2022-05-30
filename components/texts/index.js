import React from 'react';
import styled from 'styled-components';

const Regular = styled.p`
    font: var(--regular);
    color: ${(props) => props.color || '#000'};
`;

const RegularBold = styled.p`
    font: var(--bold-sm);
    color: ${(props) => props.color || '#000'};
`;

const MediumBold = styled(RegularBold)`
    font: var(--bold-md);
`;

const BigBold = styled(RegularBold)`
    font: var(--bold-lg);
`;

const Text = (props) => {
    return <Regular {...props}>{props.children}</Regular>;
};

const TextBold = (props) => {
    return <RegularBold {...props}>{props.children}</RegularBold>;
};

const TextBoldMd = (props) => {
    return <MediumBold {...props}>{props.children}</MediumBold>;
};

const TextBigBold = (props) => {
    return <BigBold {...props}>{props.children}</BigBold>;
};

export { Text, TextBold, TextBoldMd, TextBigBold };
