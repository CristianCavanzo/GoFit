import OnBoardingContext from '../providers/onboarding';
import React from 'react';
import { Welcome } from '@components/onboarding/Welcome';
import OnBoardingImg from '/public/onboarding/onboarding1.jpg';
import { TextBigBold, TextBold } from '@components/texts';
import { Title } from '@components/titles';

const OnBoarding = () => {
    const { step, setStep } = React.useContext(OnBoardingContext);
    const time = Math.floor(Math.random() * (4 - 2 + 1) + 2);
    setTimeout(() => {
        setStep(1);
    }, `${time}000`);
    return (
        <section>
            {(step === 0 && (
                <Welcome imgUrl={OnBoardingImg.src}>
                    <Title color="#fff">Bienvenidos a 👋</Title>
                    <TextBigBold color="#fff">Gofit</TextBigBold>
                    <TextBold color="#fff">
                        La mejor app de fitness de este siglo para acompañar tus
                        deportes
                    </TextBold>
                </Welcome>
            )) ||
                (step === 1 && <div>Hola</div>)}
        </section>
    );
};

export default OnBoarding;
