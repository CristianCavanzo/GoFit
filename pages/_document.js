import { OnBoardingProvider } from '../providers/onboarding';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,500;0,700;1,600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
