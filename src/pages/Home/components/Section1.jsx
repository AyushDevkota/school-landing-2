import React from "react";
import { Grid, Section, Title, Card } from "../../../components";
import { FEATURES_INFO } from "../../../constants";

const Section1 = () => {
  return (
    <Section>
      <Title title="Studying with us" />
      <Grid>
        {FEATURES_INFO.map((el, index) => (
          <Card data={el} key={index} />
        ))}
      </Grid>
    </Section>
  );
};

export default Section1;
