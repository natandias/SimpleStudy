import { useState, useEffect, useRef, useCallback } from "react";

import Heading from "./SectionOne";
import MiddleSection from "./SectionTwo";
import QuestionSection from "./SectionThree";
import LastSection from "./SectionFour";
import Footer from "./Footer";

import * as S from "./styles";

export default function Homepage() {
  return (
    <S.HomepageContainer >
      <Heading />
      <MiddleSection />
      <QuestionSection />
      <LastSection />
      <Footer />
    </S.HomepageContainer>
  );
}
