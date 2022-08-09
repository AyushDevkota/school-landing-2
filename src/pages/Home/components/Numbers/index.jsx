import React from "react";
import styles from "./Numbers.module.css";
import { Section, Title, Grid } from "../../../../components";
import { GRADUATION_INFO } from "../../../../constants";

const index = () => {
  return (
    <Section>
      <div className="text-center">
        <p className="text-green text-uppercase fs-13">our numbers</p>
        <Title title="One of the Best College in Nepal" />
        <p className={`${styles.info__text} fw-light fs-13`}>
          At our Virtual Welcome Center, you'll find the Admissions materials
          available in our actual lobby, digitized for your convenience.
        </p>
        <div className={styles.rank__container}>
          <hr />
          <Grid>
            {GRADUATION_INFO.map((el) => (
              <div key={el.id} className={styles.rank__item}>
                <h3 className={styles.ranking__rank}>{el.title}</h3>
                <p className={styles.ranking__info}>{el.description}</p>
              </div>
            ))}
          </Grid>
          <hr />
        </div>
      </div>
    </Section>
  );
};

export default index;
