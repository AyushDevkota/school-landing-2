import React from "react";
import styles from "./News.module.css";
import {
  Grid,
  Section,
  NewsComp,
  Title,
  SubTitle,
  TransparentBtn,
} from "../../../../components";
import NewsCard from "./NewsCard";
import { LATEST_EVENT } from "../../../../constants";

const index = () => {
  return (
    <Section>
      <Grid style={{ gap: "15rem" }}>
        <div>
          <p className="text-green text-uppercase fs-13">news</p>
          <Title title="Our Latest News" />
          <NewsComp />
          <div className={styles["news-carousel"]}>
            <div>
              <p className="text-dark text-uppercase">december 12, 2022</p>
              <SubTitle subTitle="Can I make Money Recycling Cataytic Converters?" />
              <TransparentBtn goTo="#" text="Learn More" />
            </div>
            <div>
              <p className="text-dark text-uppercase">december 12, 2022</p>
              <SubTitle subTitle="Can I make Money Recycling Cataytic Converters?" />
              <TransparentBtn goTo="#" text="Learn More" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-green text-uppercase fs-13">events</p>
          <Title title="Our Latest events" />
          <div className={styles.event__container}>
            {LATEST_EVENT.map((el) => (
              <NewsCard key={el.id} data={el} />
            ))}
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default index;
