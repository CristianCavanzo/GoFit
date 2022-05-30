import { OnBoardingProvider } from '../providers/onboarding';
import '@styles/global.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <OnBoardingProvider>
                <Component {...pageProps} />
            </OnBoardingProvider>
        </React.Fragment>
    );
}

export default MyApp;
