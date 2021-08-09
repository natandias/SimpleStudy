import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/global.styles";

import LandingPageLayout from "../components/Layouts/LandingPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Simple Study</title>
          <meta name="description" content="Simple Study - " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LandingPageLayout>
          <Component {...pageProps} />
        </LandingPageLayout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
