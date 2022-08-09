import React from "react";
import {
  Header,
  Section1,
  News,
  Numbers,
  ImgSection1,
  Footer,
  ImgSection2,
  Resources,
  Students,
  Testimonial,
} from "./components";

const index = () => {
  return (
    <>
      <Header />
      <Section1 />
      <News />
      <Resources />
      <ImgSection2 />
      <Students />
      <ImgSection1 />
      <Numbers />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
