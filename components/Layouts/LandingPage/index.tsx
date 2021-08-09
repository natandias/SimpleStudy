import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Navbar from "../../Navbar";
import MobileSidebar from "../../MobileSidebar";

type Props = {
  children: React.ReactNode;
};

export default function LandingPageLayout({ children }: Props) {
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
  useEffect(() => setIsMobileMenuOpen(false), [router]);

  return (
    <>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <MobileSidebar isOpen={isMobileMenuOpen} ref={sidebarRef} />
      <main>{children}</main>
    </>
  );
}
