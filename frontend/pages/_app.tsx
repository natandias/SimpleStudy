import { useState, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/global.styles";

import LandingPageLayout from "../components/Layouts/LandingPage";
import DashboardLayout from "../components/Layouts/Dashboard";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [currentLayout, setCurrentLayout] = useState("LandingPage");

  useEffect(() => {
    if (router.asPath.split("/")[1] === "dashboard") {
      setCurrentLayout("Dashboard");
    } else {
      setCurrentLayout("LandingPage");
    }
  }, [router]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Simple Study</title>
          <meta name="description" content="Simple Study - " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {currentLayout === "LandingPage" ? (
          <LandingPageLayout>
            <Component {...pageProps} />
          </LandingPageLayout>
        ) : (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        )}
      </ThemeProvider>
    </>
  );
}
export default MyApp;
