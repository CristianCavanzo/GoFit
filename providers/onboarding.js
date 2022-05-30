import React from 'react';

const OnBoardingContext = React.createContext();

export const OnBoardingProvider = ({ children }) => {
    const [step, setStep] = React.useState(0);
    return (
        <OnBoardingContext.Provider value={{ step, setStep }}>
            {children}
        </OnBoardingContext.Provider>
    );
};

export default OnBoardingContext;
