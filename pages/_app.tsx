import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/global.styles";

import Navbar from "../components/Navbar";
import MobileSidebar from "../components/MobileSidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // hide sidebar if user clicks outside it
  useEffect(() => {
    const checkIfClickedOutsideSidebar = (e: MouseEvent): void => {
      if (
        isMobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutsideSidebar);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutsideSidebar);
    };
  }, [isMobileMenuOpen]);

  // hide sidebar every time that route changes
  useEffect(() => setIsMobileMenuOpen(false), [router])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Simple Study</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <MobileSidebar isOpen={isMobileMenuOpen} ref={sidebarRef} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
